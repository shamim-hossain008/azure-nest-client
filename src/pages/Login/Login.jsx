import { Helmet } from "react-helmet";
import { Link } from "react-router";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loading } = useAuth();
  return (
    <>
      <Helmet>
        <title>Azure-Nest | Login</title>
      </Helmet>
      <div className="hero h-[700px]">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-400 lg:max-w-4xl p-4">
          <div class="flex items-center h-full lg:px-20 ">
            <div>
              <h2 class="text-2xl py-20 font-bold text-white sm:text-3xl">
                <span className="text-[#37c5bd]">Azure</span>-
                <span className="">Nest</span>
              </h2>

              <p class="max-w-xl text-white">
                Enter your credentials to access your dashboard and stay updated
                on your contests.
              </p>
            </div>
          </div>
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
            </p>

            <SocialLogin />

            <form
            // onSubmit={handleLogin}
            >
              <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-500 lg:w-1/4"></span>

                <p className="text-xs text-center text-white uppercase">
                  or login with email
                </p>

                <span className="w-1/5 border-b  lg:w-1/4"></span>
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  for="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  onBlur={(e) => setEmail(e.target.value)}
                />
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
                  id="loggingPassword"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  name="password"
                />
              </div>

              <div className="mt-6">
                <button
                  disabled={loading}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  {loading ? (
                    <ImSpinner9 className="animate-spin m-auto text-green-600" />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </form>
            <div className="space-y-1">
              <button
                // onClick={handleResetPassword}
                className="text-xs hover:underline hover:text-[#37c5bd] text-gray-100"
              >
                Forget Password
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <Link
                to="/signUp"
                href="#"
                className="text-sm uppercase text-center text-green-400 hover:underline"
              >
                or <br />
                Sign Up
              </Link>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
