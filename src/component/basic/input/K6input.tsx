import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import './index.scss';

// 展示保留InputHTMLAttributes
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChangeText: (e: React.ChangeEvent<any>) => void;
  styleName?: string;
}

const K6Input = (props: Props) => {
  const { onChangeText, type, styleName, placeholder } = props;

  return (
    <input
      placeholder={placeholder || ''}
      className={styleName || 'K6_basic_input'}
      onChange={onChangeText}
      type={type || 'text'}
    />
  );
};

export default K6Input;
