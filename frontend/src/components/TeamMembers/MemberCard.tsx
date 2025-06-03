import React from 'react';
import { MeetingType } from '../../assets/data/meetingTypes';
import { MemberType } from '../../assets/data/members';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import starIcon from '../../assets/images/star.png';

interface MemberCardProps {
  item: MemberType;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ item, index }) => {
  const navigate = useNavigate();
  const {
    name,
    specialty,
    avgRating,
    totalRating,
    photo,
    totalAppointments,
    company,
  } = item;

  const handleMemberClick = (id: string) => {
    navigate(`/members/${id}`);
  };
  return (
    <div
      onClick={() => handleMemberClick(item.id)}
      className='py-[30px] px-3 lg:px-5 flex flex-col justify-center items-start'
    >
      <img
        src={photo}
        alt={name}
        className='w-full rounded-lg object-cover mb-4 '
      />
      <div className='w-full flex items-center justify-between mt-1 lg:mt-3'>
        <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700]'>
          {name}
        </h2>
        <span className='bg-[#ccf0f3] text-irisBlueColor! py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded mb-2'>
          {specialty}
        </span>
      </div>

      <div className='flex items-center w-full justify-between'>
        <div className='mt-1 lg:mt-2 flex flex-col items-start justify-between'>
          <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
            <img src={starIcon} alt='' /> {avgRating} ({totalRating} reviews)
          </span>
          <p className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
            Total Appointments: {totalAppointments}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <Link
            to='/members'
            className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none'
          >
            <BsArrowRight className='group-hover:text-white' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
