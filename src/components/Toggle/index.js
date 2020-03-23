import React from 'react';
import { Switch } from 'antd';

const Toggle = props => {
  const { checkedValue, uncheckedValue, onChange } = props;
  return (
    <Switch checkedChildren={checkedValue} unCheckedChildren={uncheckedValue} onChange={onChange} />
  )
}

export default Toggle
