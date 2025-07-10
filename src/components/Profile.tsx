
import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, Twitter, Instagram, Facebook, Link, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const userInfo = {
    name: 'Ai By Ashu',
    email: 'Ai121@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Franc, CA',
    joinDate: 'XYZ 2023',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  };

  const connectedAccounts = [
    { platform: 'Twitter', username: '@alexjohnson', connected: true, followers: '12.3K', icon: Twitter, color: 'text-blue-500' },
    { platform: 'Instagram', username: '@alex_johnson_official', connected: true, followers: '8.7K', icon: Instagram, color: 'text-pink-500' },
    { platform: 'Facebook', username: 'Alex Johnson', connected: true, followers: '3.5K', icon: Facebook, color: 'text-blue-600' },
    { platform: 'LinkedIn', username: 'Alex Johnson', connected: false, followers: '0', icon: Link, color: 'text-blue-700' },
  ];

  const recentActivity = [
    { action: 'Updated profile picture', date: '2 days ago' },
    { action: 'Connected Instagram account', date: '1 week ago' },
    { action: 'Published 5 posts', date: '1 week ago' },
    { action: 'Reached 10K followers milestone', date: '2 weeks ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Profile</h2>
        <p className="text-gray-600">Manage your account and social media connections.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="w-24 h-24 mb-4">
                <AvatarImage src={userInfo.avatar} alt={userInfo.name} />
                <AvatarFallback className="text-lg">{userInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-semibold text-gray-800">{userInfo.name}</h3>
              <p className="text-gray-600">Social Media Manager</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-4 w-4" />
                <span className="text-sm">{userInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-4 w-4" />
                <span className="text-sm">{userInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{userInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">Joined {userInfo.joinDate}</span>
              </div>
            </div>

            <Button className="w-full" variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {connectedAccounts.map((account, index) => {
                const Icon = account.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Icon className={`h-6 w-6 ${account.color}`} />
                      <div>
                        <h4 className="font-medium text-gray-800">{account.platform}</h4>
                        <p className="text-sm text-gray-600">
                          {account.connected ? account.username : 'Not connected'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {account.connected && (
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-800">{account.followers}</p>
                          <p className="text-xs text-gray-600">followers</p>
                        </div>
                      )}
                      <Badge variant={account.connected ? 'default' : 'secondary'}>
                        {account.connected ? 'Connected' : 'Connect'}
                      </Badge>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-600">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
