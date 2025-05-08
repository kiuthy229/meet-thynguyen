import React from 'react';
import { useNavigate } from 'react-router-dom';
import { members } from '../../assets/data/members';
import MemberCard from '../../components/TeamMembers/MemberCard';

const Members = () => {
  const navigate = useNavigate();

  const handleMemberClick = (id: string) => {
    navigate(`/members/${id}`);
  };

  return (
    <div className='grid grid-cols-3' style={{ padding: '2rem' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {members.map((member, index) => (
          <li key={member.id} onClick={() => handleMemberClick(member.id)} style={{ cursor: 'pointer' }}>
            <MemberCard item={member} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Members;
