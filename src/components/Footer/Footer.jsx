import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Developed by Bilal Hodzic</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year}</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/bilalhodzic"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/bilall.121"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
            </li>
            {/* <li>
              <a
                href="https://t.me/snaichuk_v"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/in/bilal-hodzic/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
