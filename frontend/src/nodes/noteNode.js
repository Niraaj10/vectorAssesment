// noteNode.js

import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store';
import BaseNode from './baseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || '');
  const updateNodeField = useStore((s) => s.updateNodeField);
  const textAreaRef = useRef(null);

  const handleTextChange = (e) => {
    setNote(e.target.value);
    updateNodeField(id, 'note', e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [note]);

  return (
    <BaseNode
      title="Note"
      className="bg-[#fff9c4] border-[#fbc02d] border-[1px]"
    >
      <textarea
        ref={textAreaRef}
        value={note}
        onChange={handleTextChange}
        placeholder="Type a note..."
        className="w-full border-none bg-transparent resize-none text-[12px] focus:outline-none min-h-[60px]"
      />
    </BaseNode>
  );
};