import React from 'react';
import { Shield, HelpCircle } from 'lucide-react';

const AuthLayout = ({ heroContent, formContent }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-emerald-800">
            PlainPay
          </span>
          <div className="flex items-center gap-4 text-gray-400">
            <button id="help-btn" className="hover:text-emerald-700 transition-colors">
              <HelpCircle size={20} />
            </button>
            <button id="security-btn" className="hover:text-emerald-700 transition-colors">
              <Shield size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left: Hero (Hidden on small mobile if needed, but keeping for now) */}
          <div className="hidden lg:block w-full max-w-lg">
            {heroContent}
          </div>

          {/* Right: Form */}
          <div className="w-full max-w-md">
            {formContent}
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <span>© 2024 PlainPay Financial Inc. All rights reserved.</span>
          <div className="flex gap-8">
            {['Security', 'Privacy', 'Support'].map((link) => (
              <a key={link} href="#" className="hover:text-emerald-700 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AuthLayout;
