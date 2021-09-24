import { CSSProperties } from 'react';
import './App.scss';
import PlasticCard, { PlasticCardStyles } from './components/cards/plasticcard.component';

interface AppStyles {
  plasticcard?: PlasticCardStyles;
  container?: CSSProperties;
  left?: CSSProperties;
  right?: CSSProperties;
  about?: {
    tbody?: CSSProperties;
    name?: CSSProperties;
    contact?: {
      icon?: CSSProperties;
      email?: {
        icon?: CSSProperties;
        text?: CSSProperties;
      };
      phone?: {
        icon?: CSSProperties;
        text?: CSSProperties;
      };
    };
    social?: {
      row?: CSSProperties;
      icons?: CSSProperties;
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
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      alignItems: 'center',
    },
    about: {
      tbody: {
        textAlign: 'left',
      },
      name: {},
      contact: {
        icon: {
          textAlign: 'right',
          fontSize: '0.75rem',
        },
        email: {
          icon: {
            width: '6mm',
            height: '6mm',
          },
          text: {
            fontSize: '0.75rem',
            color: 'white',
            textDecoration: 'none',
          },
        },
        phone: {
          icon: {
            width: '6mm',
            height: '6mm',
          },
          text: {
            fontSize: '0.75rem',
            color: 'white',
            textDecoration: 'none',
          }
        },
      },
      social: {
        icons: {
          display: 'flex',
          justifyContent: 'space-around',
        },
        github: {
          width: '8mm',
          height: '8mm',
        },
        linkedin: {
          width: '8mm',
          height: '8mm',
        },
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
            <table>
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h2 style={styles.about?.name}>{process.env.REACT_APP_ME}</h2>
                  </th>
                </tr>
              </thead>
              <tbody style={styles.about?.tbody}>
                <tr>
                  <td style={styles.about?.contact?.icon}><img style={styles.about?.contact?.email?.icon} src={process.env.PUBLIC_URL + '/images/me.png'} alt='me' /></td>
                  <td><a style={styles.about?.contact?.email?.text} href={`mailto:` + process.env.REACT_APP_EMAIL}>{process.env.REACT_APP_EMAIL}</a></td>
                </tr>
                <tr>
                  <td style={styles.about?.contact?.icon}><img style={styles.about?.contact?.phone?.icon} src={process.env.PUBLIC_URL + '/images/me.png'} alt='me' /></td>
                  <td><a style={styles.about?.contact?.phone?.text} href={`tel:` + process.env.REACT_APP_CONTACT}>{process.env.REACT_APP_CONTACT}</a></td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div style={styles.about?.social?.icons}>
                      <a href={`https://github.com/` + process.env.REACT_APP_GITHUB} target='_blank' rel='noreferrer'>
                        <img style={styles.about?.social?.linkedin} src={process.env.PUBLIC_URL + '/images/me.png'} alt='me' />
                      </a>
                      <a href={`https://linkedin.com/in/` + process.env.REACT_APP_LINKEDIN} target='_blank' rel='noreferrer'>
                        <img style={styles.about?.social?.github} src={process.env.PUBLIC_URL + '/images/me.png'} alt='me' />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
