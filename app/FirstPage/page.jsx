"use client"

import React, { useRef, useState } from "react";
import "@styles/FirstPage.css";
import SignUp from "@app/SignUp/page";
import SecondPage from '@app/SecondPage/page';

const FirstPage = () => {
  const EmailInput = useRef();
  const PasswordInput = useRef();
  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAcc, setisAcc] = useState(true);
  const [incorrectpass, setincorrectpass] = useState(false);
  const [showLoginPage, setshowLoginPage] = useState(true);

  


  const signUpHandler = () => {
    setSignUp(true);
  };

  const submitHandler = () => {
    if(EmailInput.current.value.trim() === "" || PasswordInput.current.value.trim() === "")
    {
      return;
    }

    setLoading(true);

    fetch("/API/Users/SignIn/", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: EmailInput.current.value,
        pass: PasswordInput.current.value,
      }),
      method: "POST",
    })
    .then((res) => res.text()) 
    .then((text) => {
        if (text=== "success") {
            setisAcc(true);
            setincorrectpass(false);
            setshowLoginPage(false);
    
        } else if (text=== "accountNotFound") {
            console.log("account not found, show sign up option");
            setisAcc(false);
        } else if (text=== "incorrectPassword") {
            setincorrectpass(true);
            setisAcc(true);
        }
    })
    
      .finally(() => setLoading(false));

    EmailInput.current.value = "";
    PasswordInput.current.value = "";
  };

  return (
    <div>
      {signUp ? (
        <SignUp />
      ) : showLoginPage && (
        <div className="login_box flex justify-center items-center border rounded-xl">
          <div className="text-center p-5">
            <h1 className="text-4xl font-bold pt-3 pb-6">Login</h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="mt-4 p-2 h-8"
              ref={EmailInput}
            />
            <br />
            <input
              type="password"
              placeholder="Enter your Password"
              className="mt-6 p-2 h-8"
              ref={PasswordInput}
            />
            <br />
            <button
              className="login_button  mt-8 h-8 font-bold"
              onClick={submitHandler}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="mt-3">
            Not have account?{" "}
            <span
              className="text-blue-500 cursor-pointer "
              onClick={signUpHandler}
            >
              Sign up
            </span>
          </p>
            {incorrectpass && (
              <p className="mt-3 text-red-500">
                Incorrect password.{" "}
              </p>
              
            )}
            {!isAcc && (
              <p className="mt-3.5 text-red-500">
                Account is not found.{" "}
              </p>
              
            )}
          </div>
        </div>
      )}
      {!showLoginPage && <SecondPage/>}
    </div>
  );
};

export default FirstPage;