// // inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import BaseNode from './baseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');
  const updateNodeField = useStore((s) => s.updateNodeField);

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    updateNodeField(id, 'inputName', e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
    updateNodeField(id, 'inputType', e.target.value);
  };

  return (
       <BaseNode title="Input">
      <label className="flex flex-col text-[12px] font-medium text-white">
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
        />
      </label>

      <label className="flex flex-col text-[12px] font-medium text-white">
        Type:
        <select
          value={inputType}
          onChange={handleTypeChange}
          className="mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </BaseNode>
  );
};
