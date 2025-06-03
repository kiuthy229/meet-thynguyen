import React from 'react';
import { MemberType } from '../../assets/data/members';
import { formatDate } from '../../utils/formatDate';

const MemberAbout = ({ member }: { member: MemberType }) => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About of
          <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            {member.name}
          </span>
        </h3>
        <p className='text__para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          distinctio id cumque a! Velit ad at dolore dignissimos nesciunt,
          consectetur, vel iure aliquam id laborum officiis perspiciatis
          numquam, nisi aut.
        </p>
      </div>

      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
          Experience
        </h3>
        <ul className='pt-4 md:p-5'>
          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formatDate('2025-03-03')}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Developer, Consultant
              </p>
            </div>
            <p className='text-[14px] leading-6 font-medium text-textColor'>
              Thoughtworks
            </p>
          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formatDate('2023-12-03')}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Software Engineer
              </p>
            </div>
            <p className='text-[14px] leading-6 font-medium text-textColor'>
              -
            </p>
          </li>

          <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
            <div>
              <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                {formatDate('2022-10-03')}
              </span>
              <p className='text-[16px] leading-6 font-medium text-textColor'>
                Developer
              </p>
            </div>
            <p className='text-[14px] leading-6 font-medium text-textColor'>
              NAB Innovation Centre Vietnam
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MemberAbout;
