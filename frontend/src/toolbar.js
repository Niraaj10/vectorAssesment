// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-[#1a1433]/90 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex gap-3 shadow-2xl">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='llm' label='LLM' />
                <div className="w-[0.5px] bg-[#2e264d] mx-1" />
                <DraggableNode type='note' label='Note' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='timer' label='Timer' />
                <DraggableNode type='logic' label='Logic' />
                <DraggableNode type='display' label='Display' />
            </div>
        </div>
    );
};
