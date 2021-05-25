import { FC } from 'react';
import { RouterProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeNum } from '../../store/action/K6Redux';
import store from '../../store';
import { Dispatch } from 'redux';
import { K6Text } from '../../component/summary'

import './index.scss';
interface dispatchProps extends Dispatch {
  changeNum?: any;
}
interface props extends RouterProps {
  num: number;
  changeNum?: any;
  dispatch?: dispatchProps;
}

const btnType = [
  {
    type: 'add',
    title: '点击+1',
    num: 1,
  },
  {
    type: 'reduce',
    title: '点击-1',
    num: 1,
  },
  {
    type: 'multiple',
    title: '点击*2',
    num: 2,
  }
]

const ReduxUse: FC<props> = (props) => {
  const { num: value } = props;

  const hanldClick = (type: string, num: number) => {
    const clickMap: any = {
      add: () => handleClickAdd(num, value),
      reduce: () => handleClickReduce(num, value),
      multiple: () => handleClickMultiple(num, value),
    };

    clickMap[type]();
  };

  // 1. 引入changeNum 放入在connect 的第二个参数 mapDispatchToProps种
  const handleClickAdd = (num: number, value: number) => {
    const { changeNum } = props;
    const digital = value + num;
    changeNum(digital);
  };

  // 2. 引入store 来使用
  const handleClickReduce = (num: number, value: number) => {
    const digital = value - num;
    store.dispatch(changeNum(digital));
  };
  
  // 3. props.dispatch
  // 想要以下dispatch方法需要把connect的第二个参数mapDispatchToProps 注释掉。   注意：1，3方法的使用
  // props.dispatch(changeNum(digital))

  //  暂用第一种方法实现
  const handleClickMultiple = (num: number, value: number) => {
    const { changeNum } = props;
    const digital = value * num;
    changeNum(digital);
  };

  // 4 使用hook的方式来使用
  // 请参考 /redux/hook

  return (
    <div className="redux-use">
      <div className="redux-use-value">改变的值：{value}</div>
      <div className="redux-use-btn">
        {
          btnType.map((item: any) => {
            return (
              <button key={item.type} onClick={() =>{hanldClick(item.type, item.num)}}>
                {item.title}
              </button>
            )
          })
        }
      </div>
      <K6Text>
        <p>使用了3种方式进行了使用</p>
        <p>1. 引入changeNum 放入在connect 的第二个参数 mapDispatchToProps种</p>
        <p>2. 引入store 来使用</p>
        <p>3. props.dispatch</p>
        <p>4. useSelector, useDispatch  hook方式。 请参考/redux/hook</p>
      </K6Text>
    </div>
  );
};

const mapDispatchToProps = {
  changeNum,
};

const mapStateToProps = (state: {
  K6Redux: {
    num: number;
  };
}) => {
  const { num } = state.K6Redux;
  return {
    num,
  };
};

// 使用第三种方法dispatch,   需要 屏蔽掉  connect 第二个值 mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ReduxUse);
