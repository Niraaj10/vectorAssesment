// draggableNode.js
import { MdInput } from "react-icons/md";
import { LuComputer } from "react-icons/lu";
import { MdOutlineOutput } from "react-icons/md";
import { LuText } from "react-icons/lu";
import { FaRegNoteSticky } from "react-icons/fa6";
import { LuFilter } from "react-icons/lu";
import { LuTimer } from "react-icons/lu";
import { LuBrainCircuit } from "react-icons/lu";
import { BsDisplay } from "react-icons/bs";



const NODE_ICONS = {
  customInput: (
    <MdInput className="w-5 h-5" />
  ),
  llm: (
    <LuComputer className="w-5 h-5" />
  ),
  customOutput: (
    <MdOutlineOutput className="w-5 h-5" />
  ),
  text: (
    <LuText className="w-5 h-5" />
  ),
  note: (
    <FaRegNoteSticky className="w-5 h-5" />
  ),
  filter: (
    <LuFilter className="w-5 h-5" />
  ),
  timer: (
    <LuTimer className="w-5 h-5" />
  ),
  logic: (
    <LuBrainCircuit className="w-5 h-5" />
  ),
  display: (
    <BsDisplay className="w-5 h-5" />
  ),

};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`
        ${type} cursor-grab px-4 py-2 flex flex-col items-center justify-center 
        bg-[#1a1433]/50 backdrop-blur-md border border-[#2e264d] 
        rounded-xl shadow-lg transition-all duration-200
        hover:border-purple-500/50 hover:bg-[#2e264d]/80 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]
        active:cursor-grabbing active:scale-95 group
      `}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
    >
      <div className="text-purple-400 group-hover:text-purple-300 transition-colors drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]">
        {NODE_ICONS[type] || (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        )}
      </div>

      <span className="text-[10px] text-purple-100/70 font-bold mt-1.5 uppercase tracking-wider whitespace-nowrap group-hover:text-white transition-colors">
        {label}
      </span>
    </div>
  );
};
