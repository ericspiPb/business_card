import { CSSProperties, MouseEvent } from 'react';
import { merge } from 'lodash';

export interface LinkIconStyles {
  link?: CSSProperties;
  icon?: CSSProperties;
}

export interface LinkIconProps {
  style?: LinkIconStyles;
  alt: string;
  src?: string;
  href: string;
}

export default function LinkIcon(props: LinkIconProps): JSX.Element {
  const styles: LinkIconStyles = {
    icon: {
      transition: 'all 1s cubic-bezier(.25,.8,.25,1)',
    },
  }

  const handleMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'translateY(-2mm) scale(1.2)';
  };

  const handleMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.transform = 'translateY(0) scale(1.0)';
  };

  return (
    <a style={props.style?.link} href={props.href} target='_blank' rel='noreferrer'>
      <img style={props.style?.icon ? merge(styles.icon, props.style.icon) : styles.icon }
        src={props.src} alt={props.alt}
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
      />
    </a>
  )
}
