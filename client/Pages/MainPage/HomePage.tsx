import LoginButton from '../../components/AuthButtons/LoginButton'
import RegisterButton from '../../components/AuthButtons/RegisterButton'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <div className="flex gap-2">
        <LoginButton />
        <RegisterButton />
      </div>
      <div className="flex h-screen items-center justify-between p-4">
        {/* Left Content */}
        <div className="w-1/2 rounded bg-green-500 p-4 text-white">
          <div>
            <h2 className="text-xl font-bold">
              TESTING TESTING TESTING TESTING TESTING TESTING TESTING TESTING
              TESTING TESTING TESTING
            </h2>
          </div>
        </div>
        {/* Right Content */}
        <div className="relative flex w-1/2 flex-col items-center">
          <h2 className="yop-0 absolute text-3xl font-bold leading-none text-yellow-500">
            Share More, Waste Less
          </h2>
          <img
            src="../../Public/images/family1.png"
            alt="family-image"
            width="600px"
          />
          <div className="mt-4 flex space-x-4">
            <Link
              key="give-id"
              to="/give"
              className="rounded-2xl bg-[#fab005] px-6 py-3 text-2xl font-bold text-black hover:bg-[#f08c00]"
            >
              Give
            </Link>
            <Link
              key="request-id"
              to="/request"
              className="rounded-2xl bg-[#fab005] px-6 py-3 text-2xl  font-bold text-black hover:bg-[#f08c00]"
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
