import React from 'react';
import { meetingTypes } from './../../assets/data/meetingTypes';
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {meetingTypes.map((item, index) => (
        <ServiceCard item={item} index={index} />
      ))}
    </div>
  );
};

export default ServiceList;
