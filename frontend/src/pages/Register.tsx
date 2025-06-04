import React, { useState } from 'react';
import signupImg from '../assets/images/signup.gif';
import avatar from '../assets/images/avatar.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: '',
    gender: '',
    role: 'client',
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setFormData({ ...formData, photo: e.target.files[0].name });
    }
  };
  const handleFileUpload = () => {
    if (selectedFile) {
      const formDataToUpload = new FormData();
      formDataToUpload.append('photo', selectedFile);
      // Add API call logic here to upload the file
      console.log('File ready for upload:', formDataToUpload);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register Form Submitted:', formData);
    // Add API call logic here
  };

  return (
    <section className='px=5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt='' className='w-full rounded-l-lg' />
            </figure>
          </div>

          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
              Create an <span className='text-primaryColor'>account</span>
            </h3>
            <form onSubmit={handleSubmit}>
              <div className='mb-5'>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='fullName'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='w-full py-3 border-b border-solid border-[#0066ff61] outline-primaryColor focus:outline-none focus:border-b-primaryColor text-[22px] text-headingColor placeholder:text-textColor leading-7 cursor-pointer'
                />
              </div>

              <div className='mb-5'>
                <input
                  type='email'
                  placeholder='Enter Your Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full py-3 border-b border-solid border-[#0066ff61] outline-primaryColor focus:outline-none focus:border-b-primaryColor text-[22px] text-headingColor placeholder:text-textColor leading-7 cursor-pointer'
                />
              </div>

              <div className='mb-5'>
                <input
                  type='password'
                  placeholder='Enter Your Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full py-3 border-b border-solid border-[#0066ff61] outline-primaryColor focus:outline-none focus:border-b-primaryColor text-[22px] text-headingColor placeholder:text-textColor leading-7 cursor-pointer'
                />
              </div>

              <div className='mb-5'>
                <input
                  type='password'
                  placeholder='Enter Your Password'
                  name='password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='w-full py-3 border-b border-solid border-[#0066ff61] outline-primaryColor focus:outline-none focus:border-b-primaryColor text-[22px] text-headingColor placeholder:text-textColor leading-7 cursor-pointer'
                />
              </div>

              <div className='mb-5 flex items-center justify-between'>
                <label
                  htmlFor=''
                  className='text-headingColor font-bold text-[16px] leading-7'
                >
                  Are you a:{' '}
                  <select
                    value={formData.role}
                    onChange={handleChange}
                    name='role'
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value='member'>Member</option>
                    <option value='client'>Client</option>
                  </select>
                </label>

                <label
                  htmlFor=''
                  className='text-headingColor font-bold text-[16px] leading-7'
                >
                  Gender:{' '}
                  <select
                    value={formData.gender}
                    name='gender'
                    className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'
                  >
                    <option value=''>Select</option>
                    <option value='other'>Other</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex items-center gap-3'>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center'>
                  <img src={avatar} alt='' className='w-full rounded-full' />
                </figure>

                <div className='relative w-[160px] h-[50px]'>
                  <input
                    type='file'
                    name='photo'
                    id='customFile'
                    accept='.jpg, .png'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    onChange={handleFileChange}
                   

                  />
                  <label
                    htmlFor='customFile'
                    className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] overflow-hidden text-headingColor bg-[#0066ff46] font-semibold leading-6 justify-center rounded-lg truncate cursor-pointer'
                  >
                    Upload Image
                  </label>
                </div>
              </div>

              <div className='mt-7'>
                <button
                  type='submit'
                  className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
                >
                  Register
                </button>
              </div>

              <p className='mt-5 text-textColor text-center'>
                Already have an account?{' '}
                <Link
                  to='/login'
                  className='text-primaryColor font-medium ml-1'
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
