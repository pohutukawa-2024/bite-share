import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function HomePage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()

  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        redirect_uri: `${window.location.origin}/addProfile`,
      },
    })
  }

  return (
    <div>
      <div className="space-between z-0 -mt-8 flex flex-col gap-2 p-6 lg:flex-row">
        {/* Left Content */}
        <div className="mb-3 flex w-full flex-col items-center lg:w-2/4 lg:flex-row lg:items-baseline">
          {/* 1/3 of left content - EMPTY div */}
          <div className="w-full lg:w-1/3"></div>

          {/* 2/3 of left content - right side */}
          <div className="lg:w-3/3 mt-16 w-full rounded-2xl border border-black p-6 text-[#1f2937] shadow-xl lg:mt-36">
            <h2 className="mb-8 text-center text-3xl font-extrabold lg:text-left">
              Join our Cause, Build a Stronger Community
            </h2>
            <p className="p-3 text-center text-lg lg:text-left">
              Bite-Share connects people by sharing food to reduce waste and
              fight hunger. Join our movement today!
            </p>
            <div className="flex justify-center lg:justify-start">
              <button
                className="flex items-center gap-1 rounded-2xl bg-yellow-500 px-4 py-2 font-bold text-black hover:bg-gray-200"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex w-full flex-col items-center justify-center lg:items-start">
          <h2 className="top-16 text-center text-4xl font-bold leading-tight text-yellow-500 sm:ml-16 lg:absolute lg:ml-40 lg:text-left ">
            <span className="quote-box">Share More, Waste Less</span>
          </h2>
          <img
            src="/images/family1.png"
            alt="family-sharing-food"
            className="mx-auto w-[400px] lg:w-full"
          />
          <div className="bottom-16 flex flex-col justify-center space-y-4 sm:bottom-24 sm:ml-16 lg:absolute lg:bottom-24 lg:ml-52 lg:flex-row lg:justify-start lg:space-x-8 lg:space-y-0">
            {isAuthenticated ? (
              <Link
                to="/give"
                className="flex w-full items-center justify-center rounded-3xl bg-yellow-500 px-7 py-5 text-3xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1f2937] hover:text-white sm:w-auto lg:w-40"
              >
                Give
              </Link>
            ) : (
              <button
                onClick={handleSignUp}
                className="flex w-full items-center justify-center rounded-3xl bg-yellow-500 px-7 py-5 text-3xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1f2937] hover:text-white sm:w-auto lg:w-40"
              >
                Give
              </button>
            )}

            <Link
              to="/request"
              className="flex w-full transform items-center justify-center rounded-3xl bg-yellow-500 px-7 py-5 text-3xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-[#1f2937] hover:text-white sm:w-auto lg:w-40"
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
