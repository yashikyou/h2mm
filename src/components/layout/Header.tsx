import { NavLink } from 'react-router-dom';
import cns from 'classnames';

import { container, corner, left, right } from './header.module.scss';

const Header = () => {
  return (
    <div className={container}>
      <div className={cns(corner, left)}>logo</div>
      <div className={cns(corner, right)}>
        <NavLink to={`contacts/222`}>个人中心</NavLink>
      </div>
    </div>
  );
};

export default Header;
