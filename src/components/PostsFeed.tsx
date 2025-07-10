
import React from 'react';
import { Heart, MessageCircle, Share2, Twitter, Instagram, Facebook, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PostsFeed = () => {
  const posts = [
    {
      id: 1,
      platform: 'Twitter',
      icon: Twitter,
      color: 'text-blue-500',
      content: 'Just launched our new feature! Excited to see what our users think. #ProductLaunch #Innovation',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8,
      shares: 12,
      image: null,
    },
    {
      id: 2,
      platform: 'Instagram',
      icon: Instagram,
      color: 'text-pink-500',
      content: 'Beautiful sunset from our office today! 🌅 Sometimes you need to pause and appreciate the little moments.',
      timestamp: '4 hours ago',
      likes: 156,
      comments: 23,
      shares: 45,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      platform: 'Facebook',
      icon: Facebook,
      color: 'text-blue-600',
      content: 'Thank you to everyone who attended our webinar today! The recording will be available soon.',
      timestamp: '1 day ago',
      likes: 67,
      comments: 15,
      shares: 28,
      image: null,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Posts</h2>
          <p className="text-gray-600">Manage all your social media posts in one place.</p>
        </div>
        <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
          Create New Post
        </Button>
      </div>

      <div className="space-y-4">
        {posts.map((post) => {
          const PlatformIcon = post.icon;
          return (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <PlatformIcon className={`h-5 w-5 ${post.color}`} />
                    <span className="font-medium text-gray-800">{post.platform}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">{post.shares}</span>
                    </button>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PostsFeed;
