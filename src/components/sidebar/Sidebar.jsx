import React from 'react';
import UserProfile from './UserProfile';
import ProfileStats from './ProfileStats';
import MyCalendar from './MyCalendar';

const Sidebar = () => {
  return (
    <aside className="w-full max-w-xs rounded-lg space-y-5">
      <UserProfile />
      <ProfileStats />
      <MyCalendar />
    </aside>
  );
};

export default Sidebar;
