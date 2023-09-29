import { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import BackButtonSVG from '../../assets/icons/BackButtonSVG';

interface BackButtonProps {
  isDouble?: boolean
}

const BackButton: FC<BackButtonProps> = ({ isDouble = true }) => {
  return (
    <Link
      to={isDouble ? "../.." : ".."}
      relative="path"
      className="link"
    >
      <BackButtonSVG />
      Back
    </Link>
  );
}

export default BackButton;