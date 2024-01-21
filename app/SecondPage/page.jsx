"use client"

import React, { useState } from 'react';
import '@styles/FirstPage.css';
import FirstPage from '@app/FirstPage/page';

const SecondPage = () => {
  const [loginPage, setLoginPage] = useState(false);

  const firstPageHandler = () => {
    setLoginPage(true);
  };

  return (
    <div>
      {!loginPage ? (
        <div className='text-center mt-48'>
          <h2 className='text_sec text-3xl font-bold'>Welcome to your website!</h2>
          <br />
          <br />
          <button
            className='button_sec text-3xl font-bold pt-2 pb-2 pl-5 pr-5'
            onClick={firstPageHandler}
          >
            Logout
          </button>
        </div>
      ) : (
        <FirstPage />
      )}
    </div>
  );
};

export default SecondPage;