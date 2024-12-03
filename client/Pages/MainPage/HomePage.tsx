import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function HomePage() {
  const { loginWithRedirect } = useAuth0()

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    })
  }

  return (
    <div>
      <div className="space-between z-0 flex gap-1 p-6 ">
        {/* Left Content */}
        <div className="flex w-2/4 flex-row items-baseline">
          {/* 1/3 of left content - EMPTY div */}
          <div className=" w-1/3"></div>
          {/* 2/3 of left content - right side */}
          <div className="mt-36 w-2/3 rounded-2xl bg-[#1f2937] p-6 text-white shadow-xl">
            <h2 className="mb-8 text-3xl font-extrabold">
              Share More, Waste Less, Build a Stronger Community
            </h2>
            <p className="p-3 text-lg">
              Bite-Share connects people by sharing food to reduce waste and
              fight hunger. Join our movement today!
            </p>
            <button
              className="flex items-center gap-1 rounded-2xl bg-white px-4 py-2 text-black"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex size-9/12 flex-col items-center ">
          <h2 className="absolute top-16 text-4xl font-bold leading-tight text-yellow-500">
            <span className="quote-box">Share More, Waste Less</span>
          </h2>
          <img
            src="../../Public/images/family1.png"
            alt="family-sharing-food"
            // className=" "
          />
          <div className="absolute bottom-20 mt-0 flex justify-center space-x-8 ">
            <Link
              to="/give"
              className="transform rounded-3xl bg-yellow-500 px-7 py-5 text-2xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1f2937] hover:text-white"
            >
              Give
            </Link>
            <Link
              to="/request"
              className="transform rounded-3xl bg-yellow-500 px-7 py-5 text-2xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1f2937] hover:text-white"
            >
              Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
