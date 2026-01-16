import { Handle, Position } from 'reactflow';
import BaseNode from './baseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode title="Filter">
      <Handle 
      type="target" 
      position={Position.Left} 
      id={`${id}-in`} 
      />

      <div style={{ fontSize: '12px', textAlign: 'center' }}>Condition Filter</div>
      <Handle 
      type="source" 
      position={Position.Right} 
      id={`${id}-true`} 
      style={{ top: '30%', background: 'green' }} 
      />
      <div style={{ position: 'absolute', right: -35, top: '20%', fontSize: '10px' }}>True</div>
      
      <Handle 
      type="source" 
      position={Position.Right} 
      id={`${id}-false`} 
      style={{ top: '70%', background: 'red' }} 
      />
      <div style={{ position: 'absolute', right: -35, top: '60%', fontSize: '10px' }}>False</div>
    </BaseNode>
  );
};