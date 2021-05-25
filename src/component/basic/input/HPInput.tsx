import * as React from 'react';
import { debounce } from 'lodash';
import K6input from './K6input';

interface Props {
  request?: any;
  getListData: any;
  list?: any;
}

const HPInput = (props: Props) => {
  const handleInputChange = debounce((val) => {
    const { getListData, list } = props;
    const data = list.filter((item: any) => item.introduce.includes(val));
    getListData(data);
  }, 500);

  const onChangeInput = (e: React.ChangeEvent<any>) => {
    handleInputChange(e.target.value);
  };

  return (
    <div className="home_input_container">
      <K6input
        onChangeText={(e) => onChangeInput(e)}
        type="text"
        styleName="home_input_text"
        placeholder="请搜索..."
      />
    </div>
  );
};

export default HPInput;
