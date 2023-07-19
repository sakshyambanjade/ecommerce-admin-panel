import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [user, setUser] = useState({
    fname: '',
    lname:'',
    email: '',
    password: '',
    reEnterPassword: ''
  });

  const { name, email, password } = user;

  const register = () => {
    axios.post('http://localhost:5000/api/register', { name, email, password })
      .then(response => {
        // Handle the response here
      })
      .catch(error => {
        // Handle the error here
      });
  };

  const handelChange = e => {
    const {name , value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }


  return (
    <div>
      <div>
        {console.log("user",user)}
        <section className="bg-white dark:bg-gray-900">
          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
              <img
                alt="Pattern"
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </aside>

            <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
              <div className="max-w-xl lg:max-w-3xl">
                <a className="block text-blue-600" href="/">
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Path data */}
                  </svg>
                </a>

                <h1 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                  Welcome to Squid 🦑
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
                </p>

                <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      First Name
                    </label>

                    <input
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      name = "fname"
                      type = "text"
                      value = {user.fname}   
                      onChange={handelChange}    
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Last Name
                    </label>

                    <input
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      name = "lname"
                      type = "text"
                      value = {user.lname}   
                      onChange={handelChange}
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Email
                    </label>

                    <input
                    type = "text"
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      name = "email"
                      value = {user.email}   
                      onChange={handelChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Password
                    </label>

                    <input
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      type="password"
                      name = "password"
                      value = {user.password}   
                      onChange={handelChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                      Password Confirmation
                    </label>

                    <input
                      className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                      type="password"
                      name = "reEnterPassword"
                      value = {user.reEnterPassword}   
                      onChange={handelChange}
                    
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                      />

                      <span className="text-sm text-gray-700 dark:text-gray-200">
                        I want to receive emails about events, product updates, and company announcements.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      By creating an account, you agree to our
                      <a href="#" className="text-gray-700 underline dark:text-gray-200">
                        terms and conditions
                      </a>
                      and
                      <a href="#" className="text-gray-700 underline dark:text-gray-200">
                        privacy policy
                      </a>
                      .
                    </p>
                  </div>

                  <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                    <button
                      className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:bg-blue-700 dark:hover:text-white"
                      onClick={register}
                    >
                      Create an account
                    </button>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                      Already have an account?
                      <a href="./login" className="text-gray-700 underline dark:text-gray-200">
                        Log in
                      </a>
                      .
                    </p>
                  </div>
                </form>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
