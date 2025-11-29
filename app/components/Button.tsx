import { AnimatePresence, motion } from "motion/react";
import type { ReactNode, ReactPortal } from "react";
type buttonProps = {
  select: (e: any | unknown | ReactNode) => void;
  children: ReactNode;
};
const Button = ({ select, children }: buttonProps) => {
  return (
    <>
      <AnimatePresence mode="sync">
        <motion.button
          layout
          onClick={() => select({ children })}
          className={`relative inline-flex items-center justify-center px-4 py-2 bg-zinc-800 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-indigo-500 hover:text-white hover:shadow-lg text-sm hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
        >
          <span
            className={`  absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-600 rounded-full group-hover:w-64 group-hover:h-64 opacity-10`}
          ></span>
          <div className="flex justify-center align-middle items-center gap-2">
            <span className="relative text-sm flex items-center">
              {children}
            </span>
          </div>
        </motion.button>
      </AnimatePresence>
    </>
  );
};

export default Button;
