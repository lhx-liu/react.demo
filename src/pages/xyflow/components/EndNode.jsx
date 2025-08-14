import React from 'react';

import './nodeType.css';
import { Handle } from '@xyflow/react';
export default function EndNode({ sum = 0 }) {
  return (
    <>
      <Handle type="target" position="top" />
      <div className="start-node node-box">结果是：{sum}</div>
      <Handle type="source" position="bottom" />
    </>
  );
}
