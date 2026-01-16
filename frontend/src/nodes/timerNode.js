// timerNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import BaseNode from './baseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleChange = (e) => {
    setDelay(e.target.value);
    updateNodeField(id, 'delay', e.target.value);
  };

  return (
    <BaseNode title="Timer">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-in`}
        className="!bg-violet-500"
      />

      <label className="flex flex-col text-[12px] font-medium text-gray-700">
        Delay (ms):
        <input
          type="number"
          value={delay}
          onChange={handleChange}
          className="w-full mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
        />
      </label>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-out`}
        className="!bg-violet-500"
      />
    </BaseNode>
  );
};