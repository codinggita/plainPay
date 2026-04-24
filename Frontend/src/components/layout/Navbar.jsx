import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X, Bell } from 'lucide-react';
import { selectUI, toggleSidebar } from '../../store';
import ThemeToggle from '../common/ThemeToggle';

const Navbar = () => {
  const { sidebarOpen } = useSelector(selectUI);
  const dispatch = useDispatch();

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button onClick={() => dispatch(toggleSidebar())} className="text-gray-500 hover:text-emerald-700">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="p-2 text-gray-400 hover:text-emerald-700 relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">
          JD
        </div>
      </div>
    </header>
  );
};

export default Navbar;
