import React, { FC } from 'react';

interface Props {
  text: string;
  className?: string;
}

export const Paragraph: FC<Props> = ({ text, className }) => (
  <div className={className}>{text}</div>
);
