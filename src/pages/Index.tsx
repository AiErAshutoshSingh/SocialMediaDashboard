
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import PostsFeed from '@/components/PostsFeed';
import Schedule from '@/components/Schedule';
import Analytics from '@/components/Analytics';
import Profile from '@/components/Profile';
import Settings from '@/components/Settings';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'posts':
        return <PostsFeed />;
      case 'schedule':
        return <Schedule />;
      case 'analytics':
        return <Analytics />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
