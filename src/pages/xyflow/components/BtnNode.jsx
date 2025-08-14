import React from 'react';
import './nodeType.css';
import { Button } from 'antd';
import { Handle } from '@xyflow/react';
export default function BtnNode({ onClick = () => {} }) {
  return (
    <>
      <Handle type="target" position="top" />
      <div className="btn-node node-box">
        <Button onClick={onClick}>计算</Button>
      </div>
      <Handle type="source" position="bottom" />
    </>
  );
}
