import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MedicationIcon from "@mui/icons-material/Medication";
import SchoolIcon from "@mui/icons-material/School";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src={require("../assets/hero/hero_4.jpg")}
        className="h-full w-full object-cover"
        alt="hero"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 h-full w-full">
        <div className="flex min-h-full w-full items-center justify-center">
          <div className="space-y-6">
            <div className="text-white text-center">
              <p className="text-4xl capitalize font-bold mb-4 font-comf">
                Discover places that people love.
              </p>
              <p className="text-lg">
                We will help you find the best places in the world.
              </p>
            </div>
            <div className="flex gap-5 flex-col md:flex-row items-center">
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  className="rounded w-80 bg-white text-gray-600 py-3 px-4 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="I'm looking for..."
                  className="rounded w-80 bg-white text-gray-600 py-3 px-4 focus:outline-none"
                />
              </div>
              <div>
                <button className="rounded-md py-2.5 px-6 bg-amber-500 text-lg text-white hover:bg-amber-600">
                  Search
                </button>
              </div>
            </div>
            <div className="">
              <ul className="flex gap-5 justify-center text-sm text-white">
                <li className="capitalize">
                  <a href="/" className="hover:text-amber-500">
                    <span className="align-middle hidden md:inline-flex">
                      <RestaurantIcon />
                    </span>
                  </a>
                  Restaurants
                </li>
                <li className="capitalize">
                  <a href="/" className="hover:text-amber-500">
                    <span className="align-middle hidden md:inline-flex">
                      <LocalCafeIcon />
                    </span>
                  </a>
                  Cafe
                </li>
                <li className="capitalize">
                  <a href="/" className="hover:text-amber-500">
                    <span className="align-middle hidden md:inline-flex">
                      <FitnessCenterIcon />
                    </span>
                  </a>
                  Gym
                </li>
                <li className="capitalize">
                  <a href="/" className="hover:text-amber-500">
                    <span className="align-middle hidden md:inline-flex">
                      <MedicationIcon />
                    </span>
                  </a>
                  Hospital
                </li>
                <li className="capitalize">
                  <a href="/" className="hover:text-amber-500">
                    <span className="align-middle hidden md:inline-flex">
                      <SchoolIcon />
                    </span>
                  </a>
                  School
                </li>
                <li className="capitalize">
                  <a href="/" className="hover:text-amber-500">
                    <span className="align-middle hidden md:inline-flex">
                      <ShoppingCartIcon />
                    </span>
                  </a>
                  Shopping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
