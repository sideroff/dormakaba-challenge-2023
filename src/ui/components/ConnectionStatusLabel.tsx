import { ConnectionStatus } from '@/models/ConnectionStatus';
import { Typography } from '@mui/material';
import React from 'react';

interface Props {
  connectionStatus: ConnectionStatus;
}

const ConnectionStatusLabel: React.FC<Props> = ({ connectionStatus }) => {
  const isOnline = connectionStatus === ConnectionStatus.Online;

  return (
    <Typography color={isOnline ? 'success.main' : 'warning.main'}>
      {connectionStatus}
    </Typography>
  );
};

export default ConnectionStatusLabel;
