import { useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { loading, setLoading, signIn, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const location = useLocation();
  const from = location?.state || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      // 1.sign in user
      await signIn(email, password);
      navigate(from);
      toast.success("Login user Successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error("Logged in failed.....!");
    }
    setLoading(false);
  };
  // reset password
  const handleResetPassword = async () => {
    if (!email) return toast.error("Please write your email first!!");
    try {
      setLoading(true);
      await resetPassword(email);
      toast.success(
        "Request Success! Check your email for further process......!"
      );
    } catch (error) {
      console.log(error.message);
      toast.error("Error resetting password. Ensure your email is correct.");
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Azure-Nest | Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-sm text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6 ">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  required
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="bg-[#2A80B9] cursor-pointer transition-colors duration-300 transform  tracking-wide hover:bg-blue-500  w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <TbFidgetSpinner className="animate-spin m-auto" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
          <div className="space-y-1">
            <button
              onClick={handleResetPassword}
              className="text-xs cursor-pointer hover:underline hover:text-rose-500 text-gray-400"
            >
              Forgot password?
            </button>
          </div>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-sm dark:text-gray-400">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>

          <div>
            <SocialLogin />
          </div>

          <p className="px-6 text-sm text-center text-gray-400">
            Don&apos;t have an account yet?
            <Link
              to="/signUp"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
