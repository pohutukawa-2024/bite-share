import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <div className=" flex  items-center  p-6">
        {/* Left Content */}
        <div className="w-1/2 rounded-lg bg-gray-600 p-7 text-white shadow-xl">
          <h2 className="mb-4 text-3xl font-extrabold">
            Share More, Waste Less, Build a Stronger Community
          </h2>
          <p className="p-3 text-lg">
            Bite-Share connects people by sharing food to reduce waste and fight
            hunger. Join our movement today!
          </p>
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center ">
          <h2 className="absolute top-16 text-4xl font-bold leading-tight text-yellow-500">
            Share More, Waste Less
          </h2>
          <img
            src="../../Public/images/family1.png"
            alt="family-sharing-food"
            className="size-9/12"
          />
          <div className="absolute bottom-20 mt-0 flex justify-center space-x-8">
            <Link
              to="/give"
              className="transform rounded-3xl bg-yellow-500 px-7 py-5 text-xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-500 hover:text-white"
            >
              Give
            </Link>
            <Link
              to="/request"
              className="transform rounded-3xl bg-yellow-500 px-7 py-5 text-xl font-bold text-black transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-500 hover:text-white"
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
