import s from './NavLinks.module.scss';
import { TiHome, TiThLarge, TiUser } from 'react-icons/ti';
import { HiDocumentText } from 'react-icons/hi';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} activeClassName={s.active} exact>
          <TiHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT} activeClassName={s.active}>
          <TiUser />
          About
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} activeClassName={s.active}>
          <TiThLarge />
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} activeClassName={s.active}>
          <HiDocumentText />
          Resume
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
