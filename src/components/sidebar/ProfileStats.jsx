import React from 'react';

const stats = [
  { label: 'Profile Visitors', value: 140 },
  { label: 'Resume Viewers', value: 20 },
  { label: 'My Jobs', value: 88 }
];

const ProfileStats = () => {
  return (
    <div className="bg-white p-3 rounded-lg space-y-2">
      {stats.map(({ label, value }) => (
        <div key={label} className="flex justify-between text-sm border-b border-gray-200 pb-1">
          <span className="text-gray font-medium">{label}</span>
          <span className="font-medium text-primary">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default ProfileStats;
