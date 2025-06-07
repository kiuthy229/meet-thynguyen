import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config.js';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/Auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Login failed');
      }

      const { message, token, userId } = await res.json(); // Include userId in response
      toast.success(message);
      localStorage.setItem('token', token); // Save token
      localStorage.setItem('userId', userId); // Save userId
      setLoading(false);

      navigate('/');
    } catch (error: any) {
      toast.error(error?.message || 'Login failed');
      setLoading(false);
    }
  };

  return (
    <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
      <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
        Hello! <span className='text-primaryColor'>Welcome</span> Back
      </h3>

      <form className='py-4 md:py-0' onSubmit={handleSubmit}>
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

        <div className='mt-7'>
          <button
            type='submit'
            className={`w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button when loading
          >
            {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
          </button>
        </div>

        <p className='mt-5 text-textColor text-center'>
          Don't have an account?{' '}
          <Link to='/register' className='text-primaryColor font-medium ml-1'>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
