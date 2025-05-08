import React from 'react';
import heroImg01 from '../assets/images/hero-img01.jpeg';
import icon01 from '../assets/images/icon01.png';
import icon02 from '../assets/images/icon02.png';
import icon03 from '../assets/images/icon03.png';
import featureImg from '../assets/images/hero-img01.jpeg';
import videoIcon from '../assets/images/video-icon.png';
import avatarIcon from '../assets/images/avatar.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import About from '../components/About';
import ServiceList from '../components/Services';
import MemberList from '../components/TeamMembers';
import FaqList from '../components/Faq';

const Home = () => {
  return (
    <>
      {/* ================= hero section ================= */}
      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* ================= hero content ================= */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  Stay positive with me, healthy life
                </h1>
                <p className='text__para'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit, rerum iure. Corporis rem velit ab! Cum ipsum
                  voluptas iste praesentium nesciunt quibusdam sequi debitis
                  maxime amet mollitia? Mollitia, et fugit.
                </p>

                <button className='btn'>Request an appointment</button>
              </div>

              {/* ================= hero counter ================= */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    24/7
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>
                    Always available to support your needs and ensure success.
                  </p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    20+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>
                    Satisfied friends who trust me to bring their ideas to life.
                  </p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>
                    10+
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text__para'>
                    Books applied to solve my friends' problem.
                  </p>
                </div>
              </div>
            </div>

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img
                  className='md:w-[320px] md:h-[400px] sm:hidden'
                  src={heroImg01}
                  alt=''
                />
              </div>
              {/* <div className='mt-[30px]'>
                <img src={heroImg01} alt="" className="w-full mb-[30px]"/>
                 <img src={heroImg01} alt="" className="w-full"/>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Welcome, I'm happy to help</h2>
            <p className='text-para text-center'>
              Discover a space where ideas flourish, creativity thrives, and
              positivity reigns. Together, we can turn dreams into reality and
              make every moment count.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon01} alt='' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  About me
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Passionate about technology and innovation, I strive to bring
                  meaningful solutions to everyday challenges. With a focus on
                  collaboration and creativity, I aim to inspire and empower
                  others to achieve their goals.
                </p>

                <Link
                  to='/members'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon02} alt='' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a location
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Explore the world of possibilities and find the perfect spot
                  to bring your vision to life. Together, we can make it happen.
                </p>

                <Link
                  to='/members'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white' />
                </Link>
              </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src={icon03} alt='' />
              </div>

              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book appoinment
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Let's collaborate and create something amazing together! Your
                  ideas deserve the best, and I'm here to make them shine.
                </p>

                <Link
                  to='/members'
                  className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  <BsArrowRight className='group-hover:text-white' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* services section */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>My offer</h2>
            <p className='text-para text-center'>
              I am thrilled to offer you a range of services designed to
              inspire, empower, and bring your ideas to life. Together, we can
              achieve greatness and make every moment extraordinary!
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* feature section */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='heading'>Virtual appointment any time</h2>

              <ul className='pl-4'>
                <li className='text__para'>
                  1. Schedule the appointment directly
                </li>

                <li className='text__para'>
                  2. Connect with me through a secure and user-friendly platform
                </li>

                <li className='text__para'>
                  3. Enjoy a personalized and seamless experience tailored to
                  your needs
                </li>
              </ul>

              <Link to='/'>
                <button className='btn'>Learn More</button>
              </Link>
            </div>

            {/* feature img */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={featureImg} className='w-[30%] h-[30%]' alt='' />
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5  text-headingColor font-[600]'>
                      Tue, 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5  text-textColor font-[400]'>
                      20:00
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-md'>
                  Consultation
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={avatarIcon} />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]'>
                    Thy Nguyen
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* members */}
      <section>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Team Members</h2>
          </div>

          <MemberList />
        </div>
      </section>

      {/* faq */}
      <section>
        <div className='container'>
          <div className='w-1/2 hidden md:block'>
            <img src={'/'} alt='' />
          </div>

          <div className='w-full md:w-1/2 mx-auto'>
            <h2 className='heading text-center'>Frequently asked questions</h2>

            <FaqList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
