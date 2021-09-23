import { ReactNode, CSSProperties, useState, useLayoutEffect, useCallback } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export interface PlasticCardStyles {
  card: CSSProperties;
}
export interface PlasticCardProps {
  children?: ReactNode;
}

export default function PlasticCard(props: PlasticCardProps) {
  const { innerWidth, innerHeight } = useWindowDimensions();
  const [transform, setTransform] = useState<string>('');

  const styles: PlasticCardStyles = {
    card: {
      width: '90mm',
      height: '54mm',
      borderRadius: '16px',
      border: '1px solid white',
      transform,
      transition: 'transform 1s',
    },
  };

  const defaultCardOrientation = useCallback(() => {
    setTransform('rotate(0deg)');
  }, []);
  
  const changeCardOrientation = useCallback(() => {
    setTransform('rotate(90deg)');
  }, []);

  useLayoutEffect(() => {
    if (innerHeight > innerWidth) {
      changeCardOrientation();
    } else {
      defaultCardOrientation();
    }
  })
  
  return (
    <div className='plastic-card' style={styles.card}>
      {props.children}
    </div>
  )
}
