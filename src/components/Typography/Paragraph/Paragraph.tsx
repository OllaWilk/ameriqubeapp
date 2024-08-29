import React, { FC } from 'react';

interface Props {
  text: string;
  className?: string;
}

const Paragraph: FC<Props> = ({ text, className }) => (
  <div className={className}>{text}</div>
);

export { Paragraph };
