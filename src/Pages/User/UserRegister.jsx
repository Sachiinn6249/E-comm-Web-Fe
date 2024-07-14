import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerHandler } from "@/api/userAuth";

const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters"),
  })
  .required();

function UserRegister() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmit = async (data) => {
    try {
     await registerHandler(data); 
      navigate('/user/home')
    } catch (error) {
      console.error("Sign in failed:", error);
    }
  };

  return (
    <>
      <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
        <Link >
          <div className="text-foreground font-semibold text-2xl tracking-tighter mx-auto flex items-center gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                />
              </svg>
            </div>
            grab
          </div>
        </Link>
        <div className="relative mt-12 w-full max-w-2xl sm:mt-10">
          <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
          <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-semibold leading-6 tracking-tighter">Register</h3>
              <p className="mt-1.5 text-sm font-medium text-white/50">
                Welcome, enter your credentials to continue.
              </p>
            </div>
            <div className="p-3 pt-0">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  {/* <label className="block text-xs font-medium text-muted-foreground text-gray-400">Username</label> */}
                  <input
                    {...register("username")}
                    type="text"
                    placeholder="Username"
                    className="block w-full  border-b-2 bg-black p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                  />
                  {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
                </div>

                <div className="mb-4">
                  {/* <label className="block text-xs font-medium text-muted-foreground text-gray-400">Email</label> */}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="block w-full  border-b-2 bg-black p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                <div className="mb-4">
                  {/* <label className="block text-xs font-medium text-muted-foreground text-gray-400">Password</label> */}
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="block w-full  border-b-2 bg-black p-0 text-sm file:my-1 file:rounded-full file:border-0 file:bg-accent file:px-4 file:py-2 file:font-medium placeholder:text-muted-foreground/90 focus:outline-none focus:ring-0 sm:leading-7 text-foreground"
                  />
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>

                <div className="mb-4 flex items-center justify-between">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      className="outline-none focus:outline focus:outline-sky-300"
                    />
                    <span className="text-xs">Remember me</span>
                  </label>
                </div>

                <div className="flex items-center justify-end gap-x-2">
                  <Link
                    to="/login"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:ring hover:ring-white h-10 px-4 py-2 duration-200"
                  >
                    Log in
                  </Link>
                  <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit"
                  >
                    Register
                  </button>
                  <ToastContainer/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegister;
