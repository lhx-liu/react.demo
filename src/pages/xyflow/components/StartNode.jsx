import React, { useEffect, useState } from 'react';
import { InputNumber } from 'antd';
import './nodeType.css';
import { Handle } from '@xyflow/react';

export default function StartNode({
  value1Change = () => {},
  value2Change = () => {},
}) {
  const [value1, setvalue1] = useState(0);
  const [value2, setvalue2] = useState(0);

  useEffect(() => {
    value1Change(value1);
    value2Change(value2);
  }, [value1, value1Change, value2, value2Change]);

  return (
    <>
      <Handle type="target" position="top" />
      <div className="start-node node-box">
        数组1
        <InputNumber
          className="input-class"
          value={value1}
          onChange={setvalue1}
        ></InputNumber>
        数组2
        <InputNumber
          className="input-class"
          value={value2}
          onChange={setvalue2}
        ></InputNumber>
      </div>
      <Handle type="source" position="bottom" />
    </>
  );
}
