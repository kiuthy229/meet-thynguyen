import React from 'react';
import { members } from '../../assets/data/members';
import MemberCard from './MemberCard';


const MemberList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {members.map((item, index) => (
        <MemberCard item={item} index={index} />
      ))}
    </div>
  );
};

export default MemberList;
