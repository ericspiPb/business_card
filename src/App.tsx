import { CSSProperties } from 'react';
import './App.scss';
import PlasticCard, { PlasticCardStyles } from './components/cards/plasticcard.component';

interface AppStyles {
  plasticcard?: PlasticCardStyles;
  container?: CSSProperties;
  left?: CSSProperties;
  right?: CSSProperties;
  about?: {
    name?: CSSProperties;
    contact?: {
      email?: CSSProperties;
      phone?: CSSProperties;
    };
    social?: {
      github?: CSSProperties;
      linkedin?: CSSProperties;
    };
  };
  me?: CSSProperties;
}

function App() {
  const styles: AppStyles = {
    plasticcard: {
      card: {}
    },
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-around',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
    },
    about: {
      name: {},
      contact: {
        email: {
          fontSize: '0.75rem',
        },
        phone: {
          fontSize: '0.75rem',
        },
      },
      social: {
        github: {},
        linkedin: {},
      },
    },
    me: {
      width: '36mm',
      height: '36mm',
      borderRadius: '50%',
    }
  };

  return (
    <div className="App">
      <PlasticCard style={styles.plasticcard}>
        <div style={styles.container}>
          <div style={styles.left}>
            <h2 style={styles.about?.name}>{process.env.REACT_APP_ME}</h2>
            <p style={styles.about?.contact?.email}>{process.env.REACT_APP_EMAIL}</p>
            <p style={styles.about?.contact?.phone}>{process.env.REACT_APP_CONTACT}</p>
          </div>
          <div style={styles.right}>
            <img style={styles.me} src={process.env.PUBLIC_URL + '/images/me.png'} alt='me' />
          </div>
        </div>
      </PlasticCard>
    </div>
  );
}

export default App;
