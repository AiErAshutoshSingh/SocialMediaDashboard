
import React from 'react';
import { Bell, Lock, Globe, Palette, Database, Shield, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const Settings = () => {
  const settingsCategories = [
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { id: 'email-notifications', label: 'Email notifications', description: 'Receive email updates about your posts', enabled: true },
        { id: 'push-notifications', label: 'Push notifications', description: 'Get notifications on your device', enabled: false },
        { id: 'weekly-reports', label: 'Weekly reports', description: 'Receive weekly analytics reports', enabled: true },
      ],
    },
    {
      title: 'Privacy & Security',
      icon: Lock,
      settings: [
        { id: 'two-factor', label: 'Two-factor authentication', description: 'Add an extra layer of security', enabled: false },
        { id: 'data-sharing', label: 'Data sharing', description: 'Share anonymized data for improvements', enabled: true },
        { id: 'login-alerts', label: 'Login alerts', description: 'Get notified of new login attempts', enabled: true },
      ],
    },
    {
      title: 'Content & Display',
      icon: Palette,
      settings: [
        { id: 'dark-mode', label: 'Dark mode', description: 'Use dark theme across the application', enabled: false },
        { id: 'auto-save', label: 'Auto-save drafts', description: 'Automatically save your draft posts', enabled: true },
        { id: 'post-preview', label: 'Post previews', description: 'Show previews before publishing', enabled: true },
      ],
    },
  ];

  const dangerZone = [
    { action: 'Export Data', description: 'Download all your data in JSON format', buttonText: 'Export', variant: 'outline' as const },
    { action: 'Reset Settings', description: 'Reset all settings to default values', buttonText: 'Reset', variant: 'outline' as const },
    { action: 'Delete Account', description: 'Permanently delete your account and all data', buttonText: 'Delete', variant: 'destructive' as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Settings</h2>
        <p className="text-gray-600">Manage your account preferences and application settings.</p>
      </div>

      <div className="space-y-6">
        {settingsCategories.map((category, categoryIndex) => {
          const Icon = category.icon;
          return (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon className="h-5 w-5" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <Label htmlFor={setting.id} className="text-sm font-medium text-gray-800">
                          {setting.label}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{setting.description}</p>
                      </div>
                      <Switch id={setting.id} checked={setting.enabled} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-5 w-5" />
              <span>Data Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dangerZone.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">{item.action}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <Button variant={item.variant} size="sm">
                    {item.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <HelpCircle className="h-5 w-5" />
              <span>Support</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 flex-col items-start">
                <h4 className="font-medium mb-1">Help Center</h4>
                <p className="text-sm text-gray-600">Browse our knowledge base</p>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col items-start">
                <h4 className="font-medium mb-1">Contact Support</h4>
                <p className="text-sm text-gray-600">Get help from our team</p>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
