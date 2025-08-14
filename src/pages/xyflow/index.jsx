/*
 * @Description: 流程设计器
 * @Author: liuhaixu
 * @Date: 2025-08-08 15:08:10
 * @Last Modified by: liuhaixu
 * @Last Modified time: 2025-08-08 15:37:16
 */
import React, {
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import StartNode from './components/StartNode';
import EndNode from './components/EndNode';
import BtnNode from './components/BtnNode';
const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: '节点1' },
    width: 120,
    height: 80,
    type: 'startNode',
  },
  {
    id: '2',
    position: { x: 0, y: 100 },
    data: { label: '节点2' },
    width: 120,
    height: 80,
    type: 'btnNode',
  },
  {
    id: '3',
    position: { x: 0, y: 150 },
    data: { label: '节点3', sum: 0 },
    width: 120,
    height: 80,
    type: 'endNode',
  },
];
const initialEdges = [
  {
    id: '1',
    source: '1',
    target: '2',
  },
  {
    id: '2',
    source: '2',
    target: '3',
  },
];
function XyFlow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodesRef = useRef(nodes);
  const v1Ref = useRef(0);
  const v2Ref = useRef(0);

  useEffect(() => {
    nodesRef.current = nodes;
  }, [nodes]);

  const addValue1AndValue2 = useCallback(() => {
    const _sum = v1Ref.current + v2Ref.current;
    let newNode = JSON.parse(JSON.stringify(nodesRef.current));
    newNode.forEach((node) => {
      if (node.type === 'endNode') {
        node.data.sum = _sum;
      }
    });
    setNodes(newNode);
  }, [setNodes]);

  const nodeTypes = useMemo(
    () => ({
      startNode: ({ ...props }) => (
        <StartNode
          {...props}
          value1Change={(v) => (v1Ref.current = v)}
          value2Change={(v) => (v2Ref.current = v)}
        />
      ),

      btnNode: (props) => <BtnNode {...props} onClick={addValue1AndValue2} />,
      endNode: ({ data, ...props }) => <EndNode {...props} sum={data.sum} />,
    }),
    [addValue1AndValue2],
  );

  return (
    <div className="xyflow" style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      />
    </div>
  );
}

export default XyFlow;
