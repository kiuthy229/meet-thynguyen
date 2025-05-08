import React from 'react';
import { faqs } from '../../assets/data/faqs';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <div className='flex flex-col gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {faqs.map((item, index) => (
        <FaqItem item={item} index={index} />
      ))}
    </div>
  );
};

export default FaqList;
