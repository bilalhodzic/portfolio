import s from './AboutTextCard.module.scss';
import { GoPrimitiveDot } from 'react-icons/go';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi Everyone, I am{' '}
        <span className={s.purple}>Bilal Hodzic </span>
        from{' '}
        <span className={s.purple}>
          {' '}
          Jajce, Bosnia and Herzegovina.
        </span>
        <br />
        Skilled Software Developer with current focus on Web
        Development. Mostly working with React.js. Interested in
        blockchain technologies and web3 development.
        <br /> Bachelor in Computer Science from{' '}
        <span className={s.purple}>
          Faculty of Information Technologies, Mostar
        </span>
        <br />
        <br />
        Always looking for a way to learn new things, even in bad
        situations. I'm trying to improve at least one part of myself
        every day. <br /> Apart from pogramming, I'm interested in
        various topics including
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <GoPrimitiveDot /> Reading books
        </li>
        <li className={s.aboutActivity}>
          <GoPrimitiveDot /> Entrepreneurship
        </li>
        <li className={s.aboutActivity}>
          <GoPrimitiveDot /> Psychology
        </li>
        <li className={s.aboutActivity}>
          <GoPrimitiveDot /> Investing
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(104 141 225)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Whether you think you can, or you think you can't - you're
        right."{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
