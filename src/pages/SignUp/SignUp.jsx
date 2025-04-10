import React from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useNavigate } from "react-router";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { imageUpload } from "../../api/utils";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    try {
      setLoading(true);
      // 1.Upload image and get image url
      const image_url = await imageUpload(image);
      console.log("image data:", image_url);

      // 2. User Registration
      const result = await createUser(email, password);
      console.log("create User result:", result);

      // 3. Save user name and photo
      await updateUserProfile(name, image_url);

      navigate("/");
      toast.success("Sign up Successful");
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Azure-Nest | SignUp </title>
      </Helmet>
      <section className="hero h-[700px]">
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
            <div className="mb-8 text-center">
              <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm text-gray-400">Welcome to Azure-Nest</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name Here"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>
                <div>
                  <label htmlFor="image" className="block mb-2  text-sm">
                    Select Image:
                  </label>
                  <input
                    className="file-input file-input-gray"
                    required
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                    autoComplete="new-password"
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
                  className="bg-[#2A80B9] cursor-pointer w-full rounded-md py-3 text-white transition-colors duration-300 transform  tracking-wide hover:bg-blue-500"
                >
                  {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto " />
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Sign up with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <>
              <SocialLogin />
            </>
            <p className="px-6 text-sm text-center text-gray-400">
              Already have an account?
              <Link
                to="/login"
                className="hover:underline hover:text-rose-500 text-gray-600"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
