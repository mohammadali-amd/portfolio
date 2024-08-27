import React from 'react';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
   if (!isOpen) return null;

   return (
      <div
         className="fixed z-20 inset-y-14 inset-x-2 flex justify-center items-center"
         onClick={(e) => e.stopPropagation()}
      >
         {/* Overlay */}
         <div
            className="fixed inset-0 bg-black bg-opacity-80"
            onClick={onClose}
         ></div>
         <div className="relative z-20 p-2 bg-white/40 rounded-lg shadow-xl overflow-auto max-h-full">
            <div className='border-2 border-stone-200 rounded-md max-w-5xl'>
               {children}
            </div>
            <button
               className="absolute top-2 right-2 text-3xl text-white bg-stone-600/85 hover:bg-stone-600/95 px-3 py-[2px] rounded-md"
               onClick={onClose}
            >
               &times;
            </button>
         </div>
      </div>
   );
};

export default Modal;
