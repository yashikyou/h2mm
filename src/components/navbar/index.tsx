import config from '../../const/menu-config';
import { container, active } from './index.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <ul className={container}>
    {config.map(({ router, name }) => {
      return (
        <NavLink
          key={router}
          to={`/${router}/courses`}
          className={({ isActive, isPending }) => (isActive ? active : isPending ? 'pending' : '')}
        >
          <li>{name}</li>
        </NavLink>
      );
    })}
  </ul>
);

export default NavBar;
