// llmNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode title="LLM">
      <Handle type="target" position={Position.Left} id={`${id}-system`} style={{ top: '33%' }} />
      <Handle type="target" position={Position.Left} id={`${id}-prompt`} style={{ top: '66%' }} />
      <span style={{ fontSize: '12px' }}>This is an LLM node.</span>
      <Handle type="source" position={Position.Right} id={`${id}-response`}  />
    </BaseNode>
  );
};
