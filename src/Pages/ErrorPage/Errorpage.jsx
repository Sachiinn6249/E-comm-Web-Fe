import { useRecoilValue } from "recoil";
import { userState } from "@/Store/userAtom";
import LottieAnimation from "@/components/ui/LottieAnimation";
import { Link } from "react-router-dom";
import Error from '../../assets/Animation/Error - 1720624916734.json'


function Errorpage() {
  const isAuthenticated = useRecoilValue(userState);
  return <>
  <div className="flex h-screen flex-col bg-yellow-50">
  <img
    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
    alt=""
    className="h-64 w-full object-cover"
  />

  <div className="flex flex-1 items-center justify-center">
    <div className="mx-auto max-w-xl px-4 py-8 text-center">
      {/* <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p> */}
      <LottieAnimation animationData={Error} height={"300px"} />

      <Link to={isAuthenticated ? "/user/home": "/"}
        href="#"
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>
</div>
  </>;
}

export default Errorpage;

