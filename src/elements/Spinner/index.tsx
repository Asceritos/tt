import type { FC } from 'react';
import React from 'react';
import './Spinner.scss';

export const Spinner: FC = () => (
  <div className="spinner">
    <div className="spinner__content" />
  </div>
);
