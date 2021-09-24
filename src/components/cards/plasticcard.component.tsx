import { ReactNode, CSSProperties, MouseEvent, useState, useEffect, useCallback } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { merge } from 'lodash';

export interface PlasticCardStyles {
  card?: CSSProperties;
}
export interface PlasticCardProps {
  children?: ReactNode;
  style?: PlasticCardStyles;
}

export default function PlasticCard(props: PlasticCardProps): JSX.Element {
  const { innerWidth, innerHeight } = useWindowDimensions();
  const [transform, setTransform] = useState<string>('');

  const styles: PlasticCardStyles = {
    card: {
      width: '90mm',
      height: '54mm',
      borderRadius: '16px',
      border: '1px solid white',
      transform,
      transition: 'all 1s cubic-bezier(.25,.8,.25,1)',
    },
  };

  const defaultCardOrientation = useCallback(() => {
    setTransform('rotate(0deg)');
  }, []);

  const changeCardOrientation = useCallback(() => {
    setTransform('rotate(90deg)');
  }, []);

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'translateY(-16px)';
    event.currentTarget.style.boxShadow = '0 19px 38px rgba(255,255,255,0.30), 0 15px 12px rgba(255,255,255,0.22)';
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'translateY(0)';
    event.currentTarget.style.boxShadow = '';
  };

  useEffect(() => {
    if (innerHeight > innerWidth) {
      changeCardOrientation();
    } else {
      defaultCardOrientation();
    }
  })

  return (
    <div
      className='plastic-card'
      style={props.style?.card ? merge(styles.card, props.style.card) : styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </div>
  )
}
