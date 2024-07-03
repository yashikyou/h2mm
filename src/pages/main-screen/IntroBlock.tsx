import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { block, text } from './intro-block.module.scss';

export interface Props {
  src: string;
  title: string;
  content: string[];
  linkage: string;
}

const IntroBlock = (props: Props) => {
  const { src, title, content, linkage } = props;
  const navigate = useNavigate();

  const handleFreeUseClick = () => {
    navigate(linkage);
  };

  return (
    <div className={block}>
      <img src={src}></img>
      <div className={text}>
        <h3>{title}</h3>
        {content.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
        <Button type="primary" onClick={handleFreeUseClick}>
          免费试用
        </Button>
        <Button type="link">产品介绍</Button>
      </div>
    </div>
  );
};

export default IntroBlock;
