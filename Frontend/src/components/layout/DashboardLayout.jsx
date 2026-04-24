import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Wallet, Receipt, PieChart, Settings, LogOut, Menu, X, Bell } from 'lucide-react';
import { selectUI, toggleSidebar, logout } from '../../store';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Wallet, label: 'Budgets', path: '/budgets' },
  { icon: Receipt, label: 'Expenses', path: '/expenses' },
  { icon: PieChart, label: 'Analytics', path: '/analytics' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const DashboardLayout = () => {
  const { sidebarOpen } = useSelector(selectUI);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`bg-emerald-900 text-white fixed lg:static inset-y-0 left-0 z-50 transition-all duration-300 transform ${
          sidebarOpen ? 'w-64 translate-x-0' : 'w-20 -translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-6 border-b border-emerald-800">
            <span className={`font-bold text-xl tracking-tight transition-opacity ${!sidebarOpen && 'lg:opacity-0'}`}>
              PlainPay
            </span>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-emerald-800 transition-colors group"
              >
                <item.icon size={20} className="flex-shrink-0" />
                <span className={`text-sm font-medium transition-opacity ${!sidebarOpen && 'lg:hidden'}`}>
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-emerald-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-red-900/40 text-red-100 transition-colors group"
            >
              <LogOut size={20} className="flex-shrink-0" />
              <span className={`text-sm font-medium transition-opacity ${!sidebarOpen && 'lg:hidden'}`}>
                Sign Out
              </span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10">
          <button onClick={() => dispatch(toggleSidebar())} className="text-gray-500 hover:text-emerald-700">
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-emerald-700 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">
              JD
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
