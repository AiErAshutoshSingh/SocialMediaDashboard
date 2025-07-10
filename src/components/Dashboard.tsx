
import React from 'react';
import { TrendingUp, Users, MessageCircle, Share2, Twitter, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Followers',
      value: '24.5K',
      change: '+12%',
      icon: Users,
      color: 'text-blue-500',
    },
    {
      title: 'Total Posts',
      value: '1,234',
      change: '+8%',
      icon: Share2,
      color: 'text-green-500',
    },
    {
      title: 'Engagement',
      value: '89.2%',
      change: '+15%',
      icon: TrendingUp,
      color: 'text-purple-500',
    },
    {
      title: 'Comments',
      value: '456',
      change: '+23%',
      icon: MessageCircle,
      color: 'text-orange-500',
    },
  ];

  const platforms = [
    { name: 'Twitter', followers: '12.3K', posts: 456, icon: Twitter, color: 'bg-blue-500' },
    { name: 'Instagram', followers: '8.7K', posts: 324, icon: Instagram, color: 'bg-pink-500' },
    { name: 'Facebook', followers: '3.5K', posts: 154, icon: Facebook, color: 'bg-blue-600' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening with your social media.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {stat.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Connected Platforms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${platform.color} text-white`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-800">{platform.name}</h3>
                        <p className="text-sm text-gray-600">{platform.followers} followers</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-800">{platform.posts}</p>
                      <p className="text-xs text-gray-600">posts</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'New post published', platform: 'Twitter', time: '2 minutes ago' },
                { action: 'Comment received', platform: 'Instagram', time: '15 minutes ago' },
                { action: 'Post scheduled', platform: 'Facebook', time: '1 hour ago' },
                { action: 'Follower milestone reached', platform: 'Twitter', time: '3 hours ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.platform} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
