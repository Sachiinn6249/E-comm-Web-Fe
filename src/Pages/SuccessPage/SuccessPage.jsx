import { Link } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function SuccessPage() {
  const { width, height } = useWindowSize()
    return (
      <>
      <Confetti
      width={width}
      height={height}
    />
        <div className="flex items-center justify-center min-h-screen bg-dark-gradient bg-center" >
          <div className="bg-card bg-white text-card-foreground rounded-lg shadow-lg p-6 max-w-md w-full relative">
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-muted">
              <img  alt="close-icon" src="https://openui.fly.dev/openui/24x24.svg?text=✖" />
            </button>
            <div className="flex flex-col items-center ">
            <div className="bg-green-100 rounded-full border-8 bg-emerald-200  border-emerald-200">
            <div className="bg-green-100 rounded-full border-4 bg-emerald-300  border-emerald-200">
              <div className="bg-green-100 rounded-full p-2  border-8 bg-emerald-400  border-emerald-200">
                <img  alt="success-icon" src="https://openui.fly.dev/openui/48x48.svg?text=✔" />
                </div>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-2">Order successful!</h2>
              <p className="text-muted-foreground text-center mb-4">You can keep track of the order and the transaction details in order summary page</p>
              <div className="bg-muted rounded-lg p-3 w-full flex items-center justify-center mb-4">
              <Link to={"/user/home"}
              className="bg-yellow-300 px-2 py-2 rounded-lg font-semibold">Continue Shopping
              </Link>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}