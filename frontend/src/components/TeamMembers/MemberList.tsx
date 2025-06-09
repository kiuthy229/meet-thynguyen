import React, { useEffect, useState } from 'react';
import MemberCard from './MemberCard';
import { BASE_URL } from '../../config.js';

const MemberList = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/User`); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          const filteredMembers = data.filter(
            (member: any) => member.role === 'member'
          ); // Filter by role
          setMembers(filteredMembers);
        } else {
          console.error('Failed to fetch members');
        }
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {members.map((item, index) => (
        <MemberCard key={index} item={item} />
      ))}
    </div>
  );
};

export default MemberList;
