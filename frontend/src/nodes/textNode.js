// textNode.js

import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { useStore } from '../store';
import BaseNode from './baseNode';


export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const updateNodeField = useStore((s) => s.updateNodeField); 
  const textAreaRef = useRef(null);

  useEffect(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    setVariables(Array.from(matches));
  }, [currText]);


  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    const val = e.target.value;
    setCurrText(val);
    updateNodeField(id, 'text', val);
  };

  return (
      <BaseNode title="Text" className="w-auto min-w-[200px]">
      {/* Dynamic Handles (Variable Mapping) */}
      {variables.map((variable, index) => {
        const positionPercentage = (index + 1) * (100 / (variables.length + 1));

        return (
          <div key={`${id}-${variable}-container`}>
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-${variable}`}
              style={{ top: `${positionPercentage}%` }}
              className="!bg-violet-600"
            />
            <span
              className="absolute -left-[50px] text-[8px] -translate-y-1/2 text-gray-500"
              style={{ top: `${positionPercentage}%` }}
            >
              {variable}
            </span>
          </div>
        );
      })}

      <label className="flex flex-col text-[12px]">
        Text:
        <textarea
          ref={textAreaRef}
          value={currText}
          onChange={handleTextChange}
          className="w-full mt-1 bg-[#430b8a] border border-[#3b2d71] rounded px-2 y-1 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none overflow-hidden leading-relaxed shadow-inner"
        />
      </label>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="!bg-violet-600"
      />
    </BaseNode>
  );
};