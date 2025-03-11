import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { loading } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Azure-Nest | SignUp </title>
      </Helmet>
      <section className="hero h-[700px]">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-400 lg:max-w-4xl p-4">
          <div class="flex items-center h-full lg:px-20 ">
            <div>
              <h2 className="  text-2xl py-20 font-bold text-white sm:text-3xl">
                <span className="text-[#37c5bd]">Azure</span>-
                <span className="">Nest</span>
              </h2>

              <p class="max-w-xl text-white">
                Sign up to start discovering and participating in exciting
                challenges.
              </p>
            </div>
          </div>
          <>
            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="w-full px-6 py-8 md:px-8 lg:w-1/2"
            >
              <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                Sign Up
              </p>

              {/* <SocialLogin /> */}

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-500 lg:w-1/4"></span>

                <a
                  href="#"
                  className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
                >
                  or Sign Up with email
                </a>

                <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="LoggingEmailAddress"
                >
                  Name
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="displayName"
                />

                <span className="text-red-600">Name is required</span>
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                />

                <span className="text-red-600"> Email is required </span>
              </div>

              <div className="mt-4">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    for="loggingPassword"
                  >
                    Password
                  </label>
                </div>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  name="password"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Photo URL
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="url"
                  name="photoURL"
                />

                <span className="text-red-600">Photo URL is required</span>
              </div>

              <div className="mt-6">
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  {loading ? (
                    <ImSpinner9 className="animate-spin text-blue-600 m-auto" />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                <Link
                  to="/login"
                  className="text-xs text-[#37c5bd] uppercase hover:underline"
                >
                  Or sign In
                </Link>

                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              </div>
            </form>
          </>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
