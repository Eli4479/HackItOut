import { useState } from 'react';
import Banner from '../components/banner';
import Wrapper from '../components/wrapper';
import { FaAngleDown } from 'react-icons/fa';


function AddNew() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [title, setTitle] = useState('');
  const [assign, setAssign] = useState('');

  const submit = async (event) => {
    event.preventDefault();
    try {
      const team_id = localStorage.getItem('team_id');
      console.log(team_id);

      const datas = {
        todo_name: title,
        assigned_to: assign,
      }
      console.log(datas);
      let response = await fetch(`http://localhost:3000/api/user/teams/todo/${team_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datas),
      })
      let data = await response.text();
      let team = JSON.parse(data);
      window.location.href = '/todo';
    }
    catch (err) {
      console.log(err);
    }
  }



  return (
    <>
      <Wrapper className=' m-auto  w-screen h-screen bg-gray-900 p-4'>
        <div className='container mt-60 '>
          <div className='max-w-xl m-auto'>
            <form >
              <label className='block my-8' htmlFor='title'>
                <span className='text-white'>Title</span>
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
              <label className='block my-8' htmlFor='title'>
                <span className='text-white'>Assigning to</span>
                <input
                  className='block w-full mt-1 p-2.5 bg-white-100 border rounded-md focus:border-gray-500 focus:bg-white focus:ring-0'
                  type='text'
                  name='title'
                  required
                  placeholder='members name'
                  disabled={loading}
                  value={assign}
                  onChange={(e) => setAssign(e.target.value)}
                />
              </label>

              <div className='mt-8'>
                <button
                  className={`${loading
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-cyan-500 hover:bg-cyan-600 text-white transition duration-300 ease-in-out'
                    } font-semibold tracking-wider py-3 px-8 rounded-lg w-full`}
                  disabled={loading}
                  onClick={submit}>
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default AddNew;