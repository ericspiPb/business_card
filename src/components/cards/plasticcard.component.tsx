import React, { ReactNode } from 'react';

import './plasticcard.scss';

export interface PlasticCardProps {
  children?: ReactNode;
}

export default function PlasticCard(props: PlasticCardProps) {
  return (
    <div className="plastic-card">
      {props.children}
    </div>
  )
}
