// logicNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import BaseNode from './baseNode';

export const LogicNode = ({ id, data }) => {
  const [gate, setGate] = useState(data?.gate || 'AND');
  const updateNodeField = useStore((s) => s.updateNodeField);

  return (
    <BaseNode title="Logic Gate">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-a`}
        className="!top-[30%]"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-b`}
        className="!top-[70%]"
      />

      <select
        value={gate}
        onChange={(e) => {
          setGate(e.target.value);
          updateNodeField(id, 'gate', e.target.value);
        }}
        className="w-full mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
      >
        <option value="AND">AND</option>
        <option value="OR">OR</option>
        <option value="NOT">NOT</option>
      </select>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-out`}
        className="!bg-violet-500"
      />
    </BaseNode>
  );
};