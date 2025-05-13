"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { toast } from 'react-hot-toast';

interface UserProfile {
  username: string;
  email: string;
  name: string;
  groups: string[];
  editcount: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await api.user.getProfile();
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast.error('Failed to load profile');
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!profile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome, {profile.name || profile.username}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="space-y-2">
              <p><span className="text-gray-400">Username:</span> {profile.username}</p>
              <p><span className="text-gray-400">Email:</span> {profile.email || 'Not provided'}</p>
              <p><span className="text-gray-400">Name:</span> {profile.name || 'Not provided'}</p>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Wikimedia Stats</h2>
            <div className="space-y-2">
              <p><span className="text-gray-400">Edit Count:</span> {profile.editcount || 0}</p>
              <p><span className="text-gray-400">Groups:</span></p>
              <ul className="list-disc list-inside">
                {profile.groups?.map((group) => (
                  <li key={group} className="text-gray-300">{group}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
