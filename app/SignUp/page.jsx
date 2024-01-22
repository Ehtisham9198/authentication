"use client";

import React from "react";
import "@styles/FirstPage.css";
import { useRef, useState } from "react";
import FirstPage from "@app/FirstPage/page";

const SignUp = () => {
  const EmailInput = useRef();
  const PasswordInput = useRef();
  const NameInput = useRef();
  const [signIn, setSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [Alreadyacc, setAlreadyacc] = useState(false);
  const [signupped, setsignupped] = useState(false);

  const SignInHandler = () => {
    setSignIn(true);
  };

  const SubmitHandler = (event) => {
    if(NameInput.current.value.trim()==="" ||EmailInput.current.value.trim() === "" || PasswordInput.current.value.trim() === "")
    {
      return;
    }
    setLoading(true);
    fetch("/API/Users/SignUp/", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:NameInput.current.value,
          email: EmailInput.current.value,
          pass: PasswordInput.current.value,
        }),
        method: "POST",
      }).then(res => res.text())
      .then(text => {
        if(text === "success") {
            console.log("account created");
            setAlreadyacc(false);
            setsignupped(true);
        } else {
            console.log("account already exists", text);
            setAlreadyacc(true);
            setsignupped(false);
        }
      }).finally(()=> setLoading(false));
    EmailInput.current.value = "";
    PasswordInput.current.value = "";
    NameInput.current.value = "";
  };
  return (
    <div>
      {signIn ? (
        <FirstPage />
      ) : (
        <div className="login_box flex justify-center items-center border rounded-xl">
        <div className="text-center p-5">
          <h1 className="text-4xl font-bold pt-3 pb-6">Sign Up</h1>
          <input
            type="text"
            placeholder="Enter your Name"
            className="mt-4 p-2 h-8"
            ref={NameInput}
          />
          <br />
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
            className="login_button disabled:opacity-50 mt-8 h-8 font-bold"
            onClick={SubmitHandler}
            disabled={loading}
          >
            {loading ? "Singing Up" : "Sign Up"}
          </button>
          <p className="mt-3">
            Have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer "
              onClick={SignInHandler}
            >
              Sign In
            </span>
          </p>
          {Alreadyacc && <p className="mt-3.5 text-red-500">
                Account already exist! </p>}
          {signupped &&<p className="mt-3.5 text-red-500">
                Account created successfull <br />Please login now</p>}
        </div>
 
        </div>
      )}
      </div>

  );
};

export default SignUp;
