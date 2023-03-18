import { Link } from 'react-router-dom';
import { useState } from 'react';

function Banner({ text, link, linkTitle }) {
  const [close, setClose] = useState(false);

  const closeModal = () => {
    setClose(true);
  };

  return (
    !close && (
      <div className='max-w-xl mx-auto fixed bottom-8 left-4 right-4'>
        <div className='container p-4 rounded-lg border border-blue-600 bg-blue-100'>
          <div className='flex flex-row items-start justify-between'>
            <p className='text-sm text-gray-700'>
              {text}
              {link && (
                <Link
                  className='border-b border-blue-600 text-blue-600 font-medium'
                  to={link}
                >
                  {linkTitle}
                </Link>
              )}
            </p>
            <button type='button' onClick={closeModal}>
              <span className='sr-only'>Dismiss</span>
             
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default Banner;