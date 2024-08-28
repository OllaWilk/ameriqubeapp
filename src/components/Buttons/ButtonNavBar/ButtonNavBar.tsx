import React from 'react';

interface Props {
  label: string;
  onClick?: () => void;
}
const ButtonNavBar = ({ label, onClick }: Props) => (
  <p onClick={onClick}>{label}</p>
);

export { ButtonNavBar };
