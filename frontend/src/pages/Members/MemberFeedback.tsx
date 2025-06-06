import React from 'react';
import { MemberType } from '../../assets/data/members';
import avatar from '../../assets/images/avatar.png';
import { formatDate } from '../../utils/formatDate';
import starIcon from '../../assets/images/star.png';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm';

const MemberFeedback = ({ member }: { member: MemberType }) => {
  const [showFeedbackForm, setShowFeedbackForm] = React.useState(false);

  const handleFeedbackClick = () => {
    setShowFeedbackForm(true);
  };

  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews ({member.totalRating})
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img className='w-full' src={avatar} alt='' />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                Ali ahmed
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {formatDate('02-14-22')}
              </p>
              <p className='text__para mt-3 font-medium text-[15px]'>
                Great experience! The team was very professional and helpful.
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color='#0067ff' />
            ))}
          </div>
        </div>
      </div>

      {!showFeedbackForm && (
        <div className='text-center'>
          <button onClick={() => setShowFeedbackForm(true)} className='btn'>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default MemberFeedback;
