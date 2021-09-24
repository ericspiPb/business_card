import { CSSProperties, MouseEvent } from 'react';
import { merge } from 'lodash';

export interface TextIconStyles {
  container?: CSSProperties;
  icon?: CSSProperties;
  text?: CSSProperties;
}

export interface TextIconProps {
  style?: TextIconStyles;
  alt: string;
  src: string;
  href?: string;
}

/**
 * deprecated. using td under icon rather than flexbox
 * @param props 
 * @returns 
 */
export default function TextIcon(props: TextIconProps): JSX.Element {
  const styles: TextIconStyles = {
    container: {
      display: 'flex',
      transition: 'all 1s cubic-bezier(.25,.8,.25,1)',
    },
  };

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.border = '5px solid white';
    event.currentTarget.style.borderRadius = '1mm';
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.border = '';
  };

  return (
    <div style={props.style?.container ? merge(styles.container, props.style.container) : styles.container}
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    >
      <img style={props.style?.icon} src={props.src} alt={props.alt} />
      <a style={props.style?.text} href={props.href}>{process.env.REACT_APP_EMAIL}</a>
    </div>
  )
}
