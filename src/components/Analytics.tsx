
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, Eye, Heart } from 'lucide-react';

const Analytics = () => {
  const engagementData = [
    { name: 'Mon', likes: 120, comments: 45, shares: 23 },
    { name: 'Tue', likes: 150, comments: 52, shares: 31 },
    { name: 'Wed', likes: 180, comments: 38, shares: 28 },
    { name: 'Thu', likes: 165, comments: 62, shares: 35 },
    { name: 'Fri', likes: 200, comments: 55, shares: 42 },
    { name: 'Sat', likes: 170, comments: 48, shares: 38 },
    { name: 'Sun', likes: 140, comments: 35, shares: 25 },
  ];

  const followerGrowth = [
    { name: 'Jan', followers: 1200 },
    { name: 'Feb', followers: 1350 },
    { name: 'Mar', followers: 1580 },
    { name: 'Apr', followers: 1820 },
    { name: 'May', followers: 2100 },
    { name: 'Jun', followers: 2450 },
  ];

  const platformData = [
    { name: 'Twitter', value: 45, color: '#1DA1F2' },
    { name: 'Instagram', value: 35, color: '#E4405F' },
    { name: 'Facebook', value: 20, color: '#1877F2' },
  ];

  const topMetrics = [
    { title: 'Reach', value: '145K', change: '+18%', icon: Eye, color: 'text-blue-500' },
    { title: 'Impressions', value: '523K', change: '+25%', icon: TrendingUp, color: 'text-green-500' },
    { title: 'Profile Visits', value: '12.3K', change: '+12%', icon: Users, color: 'text-purple-500' },
    { title: 'Total Engagements', value: '8.9K', change: '+33%', icon: Heart, color: 'text-red-500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h2>
        <p className="text-gray-600">Track your social media performance and engagement.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {topMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  {metric.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${metric.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="likes" fill="#3B82F6" />
                <Bar dataKey="comments" fill="#10B981" />
                <Bar dataKey="shares" fill="#8B5CF6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Follower Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={followerGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="followers" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
