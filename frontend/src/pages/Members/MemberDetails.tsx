import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import starIcon from '../../assets/images/star.png';
import MemberAbout from './MemberAbout';
import MemberFeedback from './MemberFeedback';
import SidePanel from './SidePanel';
import { BASE_URL } from '../../config.js';

const MemberDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'about' | 'feedback'>('about');

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(`${BASE_URL}/User/${id}`); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          if (data.role === 'member') {
            setMember(data);
          } else {
            console.error('User is not a member');
          }
        } else {
          console.error('Failed to fetch member details');
        }
      } catch (error) {
        console.error('Error fetching member details:', error);
      }
    };

    fetchMember();
  }, [id]);

  if (!member) {
    return <div>Loading member details...</div>;
  }

  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        <div className='grid md:grid-cols-3 gap-[50px]'>
          <div className='md:col-span-2'>
            <div className='flex items-center gap-5'>
              <figure className='max-w-[200px] mx-h-[200px]'>
                <img src={member.photo} alt='' className='w-full rounded-md' />
              </figure>

              <div>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                  {member.specialty}
                </span>
                <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                  {member.name}
                </h3>
                <div className='flex items-center gap-[6px]'>
                  <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                    <img src={starIcon} alt='' /> {member.avgRating}
                  </span>
                  <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                    ({member.totalRating} reviews)
                  </span>
                </div>

                <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>
                  {member.bio}
                </p>
              </div>
            </div>

            <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
              <button
                onClick={() => setActiveTab('about')}
                className={`${
                  activeTab === 'about' &&
                  'border-b border-solid border-primaryColor'
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>

              <button
                onClick={() => setActiveTab('feedback')}
                className={`${
                  activeTab === 'feedback' &&
                  'border-b border-solid border-primaryColor'
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className='mt-[50px]'>
              {activeTab === 'about' && <MemberAbout member={member} />}
              {activeTab === 'feedback' && <MemberFeedback member={member} />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberDetails;
