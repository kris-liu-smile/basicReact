import { K6Text } from '../../component/summary'
import './index.scss';
import { useSelector, useDispatch } from "react-redux";
import { changeNum } from '../../store/action/K6Redux';

interface K6store {
  K6Redux: {
    num: number;
  }
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

const ReduxUseHook = () => {
  const dispatch = useDispatch()

  let { num: value } = useSelector(({
    K6Redux: { num }
  }: K6store) => ({
    num
  }));

  const hanldClick = (type: string, num: number) => {

    if  (type === 'add') value += num

    if (type === 'reduce') value -= num

    if (type === 'multiple') value *= num

    dispatch(changeNum(value))
  };

  return (
    <div className="redux-use">
      <div className="redux-use-value">改变的值(hook)：{value}</div>
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
        <p>hook:useSelector, useDispatch使用</p>
        <p>注意：useSelector, useDispatch需要在函数组件或者自定义组件中抒写，函数组件首字母</p>
      </K6Text>
    </div>
  );
};


export default ReduxUseHook;
