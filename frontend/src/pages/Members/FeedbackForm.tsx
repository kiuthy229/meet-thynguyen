import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [hover, setHover] = React.useState(0);

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();
    // Handle form submission logic here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Reset form fields
    setRating(0);
    setComment('');
  }

  return (
    <form action=''>
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          How would you rate your experience with this member?
        </h3>

        <div className='flex items-center gap-2 mb-4'>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;
            return (
              <button
                key={index}
                type='button'
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(0)}
                onFocus={() => setHover(index)}
                onBlur={() => setHover(0)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
                aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
                className={`leading-6 cursor-pointer bg-transparent border-none outline-none text-[22px] ${
                  rating >= index || hover >= index
                    ? 'text-yellowColor'
                    : 'text-gray-400'
                }`}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions*
        </h3>

        <textarea
          className='w-full h-[150px] px-4 py-3 border border-solid border-[#0066ff34] outline-primaryColor rounded-md focus:outline focus:border-primaryColor'
          placeholder='Write your feedback here...'
          value={comment}
          rows={5}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>

      <button type='submit' className='btn' onClick={handleSubmit}>
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
