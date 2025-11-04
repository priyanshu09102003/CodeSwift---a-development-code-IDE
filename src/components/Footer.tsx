import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-gray-900 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-0">
        
          <p className="text-gray-300 text-sm sm:text-base font-medium text-center sm:text-left">
            © {new Date().getFullYear()} CodeSwift. All rights reserved.
          </p>

        
          <p className="text-gray-300 text-sm sm:text-base font-medium text-center sm:text-right">
            Designed and Developed by{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-bold underline decoration-2 underline-offset-2"
            >
              Priyanshu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};