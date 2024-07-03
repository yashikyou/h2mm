import config from './config';
import { container, btn } from './index.module.css';

const NavBar = () => {
  return (
    <ul className={container}>
      {config.map(({ route, name }) => {
        return (
          <li key={route} className={btn}>
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
