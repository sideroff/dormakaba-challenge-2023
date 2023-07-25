import { container } from 'tsyringe';
import { HttpError } from 'http-errors';
import { DoorRepository } from '@/server/repositories/DoorRepository';
import { BuildingRepository } from '@/server/repositories/BuildingRepository';
import { GetDoorListUseCase } from './GetDoorListUseCase';
import { ApartmentRepository } from '../repositories/ApartmentRepository';

describe('GetDoorListUseCase', () => {
  let getDoorListUseCase: GetDoorListUseCase;

  beforeEach(() => {
    container.clearInstances();
    getDoorListUseCase = container.resolve(GetDoorListUseCase);
  });

  it('should call repository methods', async () => {
    const getAllDoorsSpy = jest
      .spyOn(DoorRepository.prototype, 'getAllDoors')
      .mockImplementation(() => Promise.resolve([]));

    const getAllBuildingsSpy = jest
      .spyOn(BuildingRepository.prototype, 'getAllBuildings')
      .mockImplementation(() => Promise.resolve([]));

    const getAllApartmentsSpy = jest
      .spyOn(ApartmentRepository.prototype, 'getAllApartments')
      .mockImplementation(() => Promise.resolve([]));

    await getDoorListUseCase.execute();

    expect(getAllDoorsSpy).toHaveBeenCalledTimes(1);
    expect(getAllBuildingsSpy).toHaveBeenCalledTimes(1);
    expect(getAllApartmentsSpy).toHaveBeenCalledTimes(1);
  });

  it('should throw if getAllBuildings request fails', async () => {
    const getAllDoorsSpy = jest
      .spyOn(DoorRepository.prototype, 'getAllDoors')
      .mockImplementation(() => Promise.resolve([]));

    const getAllBuildingsSpy = jest
      .spyOn(BuildingRepository.prototype, 'getAllBuildings')
      .mockImplementation(() => {
        return Promise.reject(new Error());
      });
    const getAllApartmentsSpy = jest
      .spyOn(ApartmentRepository.prototype, 'getAllApartments')
      .mockImplementation(() => Promise.resolve([]));

    try {
      await getDoorListUseCase.execute();
    } catch (error) {
      expect(error).toBeInstanceOf(HttpError);
    }

    expect(getAllDoorsSpy).toHaveBeenCalledTimes(1);
    expect(getAllBuildingsSpy).toHaveBeenCalledTimes(1);
    expect(getAllApartmentsSpy).toHaveBeenCalledTimes(1);

    expect.assertions(4);
  });
});
