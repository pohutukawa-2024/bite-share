import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <div className="min-h-screen p-7 text-gray-800">
      <h1 className="text-black-600 mb-6 text-center text-3xl font-bold">
        About Us
      </h1>

      <div className="mx-auto max-w-4xl space-y-6 text-sm">
        {/* Welcome Section */}
        <p className="text-center">
          Welcome to{' '}
          <span className="text-black-600 font-semibold">Bite-Share</span>, the
          platform dedicated to bringing communities together through the simple
          act of sharing food.
        </p>

        <div>
          <h2 className="text-black-600 mb-1 text-xl font-bold">Our Mission</h2>
          <p className="leading-snug">
            We believe that no food should go to waste when it can fill
            someone’s plate. Our mission is to create a space where people can
            connect, share surplus food, and make a positive impact on the
            environment and their community.
          </p>
        </div>

        <div>
          <h2 className="text-black-600 mb-1 text-xl font-bold">What We Do</h2>
          <p className="mb-3">
            <strong>Bite-Share</strong> is a food-sharing platform that allows
            users to:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>Give Food:</strong> Share excess food with those who need
              it, whether it’s leftovers, pantry items, or fresh produce.
            </li>
            <li>
              <strong>Request Food:</strong> Find food in your area when you’re
              in need, making access simple and hassle-free.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-black-600 mb-1 text-xl font-bold">
            Why It Matters
          </h2>
          <ul className="list-inside list-disc space-y-1">
            <li>
              <strong>Fight Hunger:</strong> By sharing food, we can help those
              in need and strengthen community bonds.
            </li>
            <li>
              <strong>Reduce Waste:</strong> Each year, millions of tons of food
              are wasted. Together, we can change that.
            </li>
            <li>
              <strong>Build Community:</strong> Food has always brought people
              together, and we’re harnessing its power to create a stronger,
              more connected world.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-black-600 mb-1 text-xl font-bold">Our Vision</h2>
          <p className="leading-snug">
            A world where food is valued, shared, and enjoyed by all, creating a
            culture of generosity and sustainability.
          </p>
        </div>

        <div>
          <h2 className="text-black-600 mb-1 text-xl font-bold">Join Us</h2>
          <p className="leading-snug">
            Whether you’re here to share food, find food, or simply support our
            mission, you’re a part of a growing movement. Together, we can make
            a difference—one shared meal at a time.
            <br />
            <span className="text-black-600 font-semibold">
              Let’s build a kinder, more sustainable future.
            </span>
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-black-600 mb-2 text-xl font-bold">
            Start sharing today!
          </h2>
          <Link to="/give" key="aboutUs">
            {' '}
            <button className="rounded bg-green-500 px-4 py-1 font-semibold text-white transition hover:bg-green-600">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
