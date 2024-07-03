import { Carousel } from 'antd';

import NavBar from '../../components/navbar';
import IntroBlock from './IntroBlock';
import { bannerConfig, blockConfig } from './config';
import { bannerContainer, itemWrapper } from './index.module.css';

const MainScreen = () => (
  <>
    <NavBar />
    <div className={bannerContainer}>
      <Carousel autoplay arrows>
        {bannerConfig.map((src, idx) => (
          <div key={idx} className={itemWrapper}>
            <img src={src}></img>
          </div>
        ))}
      </Carousel>
    </div>
    <div>
      {blockConfig.map((cp, idx) => (
        <IntroBlock key={idx} {...cp} />
      ))}
    </div>
  </>
);

export default MainScreen;
