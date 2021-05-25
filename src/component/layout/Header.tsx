import { BarsOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import './index.scss';

const LayoutHeader = () => {
  let history = useHistory();
  const gotoPage = () => {
    history.push('/');
  };

  return (
    <div className="layout-header-contain">
      <p>
        <BarsOutlined className="layout-header-svg-aside" />
      </p>
      <p>欢迎来到xxxxx学习</p>
      <p>
        <ArrowUpOutlined
          onClick={gotoPage}
          className="layout-header-svg-return"
        />
      </p>
    </div>
  );
};

export default LayoutHeader;
