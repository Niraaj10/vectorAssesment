// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import BaseNode from './baseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    updateNodeField(id, 'outputName', e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
    updateNodeField(id, 'outputType', e.target.value);
  };

  return (
    <BaseNode title="Output">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="!bg-violet-500"
      />

      <label className="flex flex-col text-[12px] font-medium text-gray-700">
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
        />
      </label>

      <label className="flex flex-col text-[12px] font-medium text-gray-700">
        Type:
        <select
          value={outputType}
          onChange={handleTypeChange}
          className="mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
      />
    </BaseNode>
  );
};