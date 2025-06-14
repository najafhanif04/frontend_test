import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CalendarDays, Clock } from 'lucide-react';

const MyCalendar = () => {
  const [open, setOpen] = useState(false);

  const upcomingEvents = [
    {
      title: 'Interview with Teams',
      date: 'June 15, 2025',
      time: '10:00 AM',
    },
  ];

  return (
    <div className="bg-white rounded-lg py-2 shadow-sm">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 rounded text-sm font-medium text-gray cursor-pointer"
      >
        My Calendar
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>

      {/* Upcoming Events */}
      {open && (
        <div className="px-4 py-2 text-sm text-gray space-y-2 border-t border-gray-200">
          <p className="text-xs font-medium text-gray">Upcoming Interviews</p>
          {upcomingEvents.map((event, index) => (
            <div key={index} className="p-2 rounded-md bg-gray-50 hover:bg-gray-100">
              <p className="font-medium">{event.title}</p>
              <div className="flex items-center text-xs text-gray mt-1">
                <CalendarDays className="w-3.5 h-3.5 mr-1" />
                {event.date}
                <Clock className="w-3.5 h-3.5 ml-4 mr-1" />
                {event.time}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
