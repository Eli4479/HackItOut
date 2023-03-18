import { useState } from 'react';
import Banner from '../components/banner';
import Wrapper from '../components/wrapper';
import {FaAngleDown} from 'react-icons/fa';


function AddNew() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clearData = () => {
    setTitle('');
    setDescription('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      setLoading(false);
      clearData();
    }, 3000);
  };

  

  return (
    <>
      <Wrapper className='p-4'>
        <div className='container m-auto'>
          <div className='max-w-xl m-auto'>
            {/* <h3 className='text-2xl font-semibold text-gray-900 mb-7 md:mb-10'>
              Add new
            </h3> */}
            <form onSubmit={handleSubmit}>
              <label className='block my-8' htmlFor='title'>
                <span className='text-gray-700'>Title</span>
                <input
                  className='block w-full mt-1 p-2.5 bg-white-100 border rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                  type='text'
                  name='title'
                  required
                  placeholder='Task'
                  disabled={loading}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label className='block my-8' htmlFor='description'>
                <div className='flex flex-row items-center '>
                  
                   <span className='text-gray-700'>Assign To </span> 
                    {/* <span><FaAngleDown/></span> */}
                    
                
                </div>
                
                <div className="relative w-full lg:max-w-sm">
            <select className=" block w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
           
                    <option>Aryan</option>
                <option>Saransh</option>
                <option>Vani</option>
            </select>
        </div>
              </label>
              <div className='mt-8'>
                <button
                  className={`${
                    loading
                      ? 'bg-gray-200 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600 text-white transition duration-300 ease-in-out'
                  } font-semibold tracking-wider py-3 px-8 rounded-lg w-full`}
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Add'}
                </button>
              </div>
            </form>
          </div>
          {submitted && (
            <Banner
              text='A new to-do has been added to your list. Add more, or go back to
              the '
              link='/'
              linkTitle='homepage'
            />
          )}
        </div>
      </Wrapper>
    </>
  );
}

export default AddNew;