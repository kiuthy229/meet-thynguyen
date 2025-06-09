import React, { useState } from 'react';

const YourMeetings = () => {
  const meetings = [
    { clientName: 'John Doe', date: '2025-6-01', time: '10:00 AM' },
    { clientName: 'Jane Smith', date: '2025-6-02', time: '2:00 PM' },
    // Add more meetings as needed
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className='px-3 py-2 bg-gray-50'>
      <h1 className='text-2xl font-bold mb-4'>Your Meetings</h1>
      <div className='flex items-center justify-between mb-4'>
        <button
          onClick={handlePreviousMonth}
          className='bg-primaryColor text-white py-2 px-4 rounded'
        >
          Previous
        </button>
        <h2 className='text-xl font-semibold'>
          {monthName} {year}
        </h2>
        <button
          onClick={handleNextMonth}
          className='bg-primaryColor text-white py-2 px-4 rounded'
        >
          Next
        </button>
      </div>
      <div className='mb-4 rounded-md border-solid border bg-white'>
      <div className='grid grid-cols-7 text-center font-bold'>
        {weekdays.map((weekday) => (
          <div key={weekday} className='weekday border-r'>
            {weekday}
          </div>
        ))}
      </div>
      <div className='grid grid-cols-7'>
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
          const meeting = meetings.find((m) => m.date === formattedDate);

          const isToday =
            today.getFullYear() === currentDate.getFullYear() &&
            today.getMonth() === currentDate.getMonth() &&
            today.getDate() === day;

          return (
            <div
              key={day}
              className={`day-card border-r border-b p-4 !pb-16 cursor-pointer ${isToday ? 'bg-yellow-200' : ''}`}
            >
              <h2 className='font-bold'>{day}</h2>
              {meeting ? (
                <div className='meeting-card mt-2'>
                  <p>Client: {meeting.clientName}</p>
                  <p>Time: {meeting.time}</p>
                </div>
              ) : (
                <p>No meetings</p>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default YourMeetings;
