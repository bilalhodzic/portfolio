import ReactParticles from 'react-tsparticles';
import {
  DARK_THEME_PARTICLES,
  LIGHT_THEME_PARTICLES,
} from './particleType';
import { useThemeContext } from '../../../hooks/themeHook/themeHook';

const Particles = () => {
  const { dark } = useThemeContext();

  const particles = dark
    ? DARK_THEME_PARTICLES
    : LIGHT_THEME_PARTICLES;

  return (
    <ReactParticles
      params={{
        particles: particles,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push',
            },
          },
          modes: {
            // push: {
            //   particles_nb: 1,
            // },
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particles;
