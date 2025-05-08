import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { members } from '../../assets/data/members';

const MemberDetails = () => {
  const { id } = useParams<{ id: string }>();
  const member = members.find((member) => member.id === id);
  const [activeTab, setActiveTab] = useState<'about' | 'feedback'>('about');

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{member.name}</h1>
      <img
        src={member.photo}
        alt={`${member.name}'s profile`}
        className='w-[150px] rounded-md'
      />
      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => setActiveTab('about')}
          style={{
            marginRight: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: activeTab === 'about' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'about' ? '#fff' : '#000',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          About
        </button>
        <button
          onClick={() => setActiveTab('feedback')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: activeTab === 'feedback' ? '#007bff' : '#f8f9fa',
            color: activeTab === 'feedback' ? '#fff' : '#000',
            border: '1px solid #ccc',
            cursor: 'pointer',
          }}
        >
          Feedback
        </button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {activeTab === 'about' && (
          <div>
            <p>
              <strong>Specialty:</strong> {member.specialty}
            </p>
            <p>
              <strong>Average Rating:</strong> {member.avgRating}
            </p>
            <p>
              <strong>Total Ratings:</strong> {member.totalRating}
            </p>
            <p>
              <strong>Total Appointments:</strong> {member.totalAppointments}
            </p>
            <p>
              <strong>Company:</strong> {member.company}
            </p>
          </div>
        )}
        {activeTab === 'feedback' && (
          <div>
            <h2>Feedback</h2>
            <p>No feedback available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberDetails;
