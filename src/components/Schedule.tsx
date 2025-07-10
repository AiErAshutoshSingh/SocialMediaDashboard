
import React, { useState } from 'react';
import { Calendar, Clock, Twitter, Instagram, Facebook, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const scheduledPosts = [
    {
      id: 1,
      content: 'Weekly team meeting insights and key takeaways. Looking forward to implementing these strategies!',
      platforms: ['Twitter', 'LinkedIn'],
      scheduledTime: '2024-01-15T14:30:00',
      status: 'scheduled',
    },
    {
      id: 2,
      content: 'Behind the scenes of our latest product development. Exciting times ahead! 🚀',
      platforms: ['Instagram', 'Facebook'],
      scheduledTime: '2024-01-16T10:00:00',
      status: 'scheduled',
    },
    {
      id: 3,
      content: 'Customer success story: How our solution helped increase productivity by 40%',
      platforms: ['Twitter', 'Facebook', 'LinkedIn'],
      scheduledTime: '2024-01-17T16:15:00',
      status: 'draft',
    },
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter':
        return <Twitter className="h-4 w-4 text-blue-500" />;
      case 'Instagram':
        return <Instagram className="h-4 w-4 text-pink-500" />;
      case 'Facebook':
        return <Facebook className="h-4 w-4 text-blue-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'published':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Post Scheduler</h2>
          <p className="text-gray-600">Plan and schedule your social media content.</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          Schedule Post
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }, (_, i) => {
                  const date = i + 1;
                  const hasPost = [15, 16, 17, 22, 28].includes(date);
                  return (
                    <button
                      key={i}
                      className={`p-2 text-sm rounded-lg hover:bg-gray-100 transition-colors ${
                        hasPost ? 'bg-blue-100 text-blue-800 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {date <= 31 ? date : ''}
                    </button>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Scheduled Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <Badge className={getStatusColor(post.status)}>
                      {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                    </Badge>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>
                        {new Date(post.scheduledTime).toLocaleDateString()} at{' '}
                        {new Date(post.scheduledTime).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{post.content}</p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Platforms:</span>
                      <div className="flex space-x-1">
                        {post.platforms.map((platform, index) => (
                          <div key={index} className="flex items-center space-x-1">
                            {getPlatformIcon(platform)}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        Cancel
                      </Button>
                    </div>
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

export default Schedule;
