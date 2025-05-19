import React from 'react';
import Button from '@mui/material/Button';

type Props = {
  label: string;
  onClick?: () => void;
};

const AppButton: React.FC<Props> = ({ label, onClick }) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default AppButton;