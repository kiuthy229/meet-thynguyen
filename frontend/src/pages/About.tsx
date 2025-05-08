import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Welcome to our application! Our platform is designed to help users
        schedule and manage meetings efficiently. Whether you're coordinating
        with team members, clients, or other stakeholders, our tools make it
        easy to stay organized and productive.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Our mission is to simplify the process of scheduling and ensure that
        everyone can focus on what truly matters—collaboration and achieving
        goals. Thank you for choosing our platform, and we look forward to
        helping you succeed!
      </p>
    </div>
  );
};

export default About;