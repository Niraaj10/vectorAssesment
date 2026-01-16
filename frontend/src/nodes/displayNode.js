// dispalyNode.js

import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const DisplayNode = ({ id }) => {
  return (
    <BaseNode
      title="Display"
      className="bg-[#2d2d2d] text-[#00ff00]"
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-in`}
      />

      <div className="font-mono text-[10px]">
        &gt; Awaiting data...
      </div>
    </BaseNode>
  );
};