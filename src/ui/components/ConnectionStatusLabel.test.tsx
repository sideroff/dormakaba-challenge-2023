import { render } from '@testing-library/react';
import ConnectionStatusLabel from './ConnectionStatusLabel';
import { ConnectionStatus } from '@/models/ConnectionStatus';

describe('ConnectionStatusLabel', () => {
  describe('with status `online`', () => {
    it('should render correctly ', () => {
      const { container } = render(
        <ConnectionStatusLabel connectionStatus={ConnectionStatus.Online} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('with status `offline`', () => {
    it('should render correctly ', () => {
      const { container } = render(
        <ConnectionStatusLabel connectionStatus={ConnectionStatus.Online} />,
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
