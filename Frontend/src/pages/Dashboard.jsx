import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Financial Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Balance', value: '$12,450.00', color: 'bg-emerald-50 text-emerald-700' },
          { label: 'Monthly Income', value: '$4,200.00', color: 'bg-blue-50 text-blue-700' },
          { label: 'Monthly Expenses', value: '$1,850.00', color: 'bg-red-50 text-red-700' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color.split(' ')[1]}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 min-h-[300px] flex items-center justify-center border-dashed">
        <p className="text-sm text-gray-400 italic">Financial charts and transaction history will appear here.</p>
      </div>
    </div>
  );
};

export default Dashboard;
