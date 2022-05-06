const Discover = () => {
  return (
    <>
      {/* <!-- Discover by Categories  --> */}
      <div className="bg-gray-50 dark:bg-gray-800 py-32">
        <div className="w-10/12 md:w-8/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 dark:text-gray-100 mb-3">
              Discover by Categories
            </p>
            <p className="text-gray-600 dark:text-gray-100">
              Discover Places by Categories
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/566024_coffee_cafe_cup_drink_espresso_icon.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Coffee & Tea
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/531911_camera_device_entertainment_film_media_icon.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Entertainment
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/hotel.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Hotels & Travel
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/health.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Health & Medical
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/school.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Education
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/automotive.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Automotive
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/home.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Home Service
                  </p>
                </div>
              </a>
              <a
                href="/"
                className="p-4 bg-white dark:border dark:border-gray-700 dark:bg-gray-800 w-60 shadow hover:shadow-lg transition-all space-y-5 rounded-lg"
              >
                <img
                  src={require("../assets/icons/shopping.png")}
                  alt=""
                  className="w-32 h-32 mx-auto rounded-full"
                />
                <div className="space-y-2 text-center">
                  <p className="text-gray-700 dark:text-gray-100 text-lg font-semibold mb-3">
                    Shopping
                  </p>
                </div>
              </a>
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-md py-2.5 px-4 bg-white dark:bg-gray-800 border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600 dark:text-gray-100">
                🎈 Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
