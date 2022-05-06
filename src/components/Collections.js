const Collections = () => {
  return (
    <>
      {/* <!-- Collections  --> */}
      <div className="bg-slate-100 dark:bg-gray-800 py-32">
        <div className="w-10/12 md:w-8/12 mx-auto">
          <div className="text-center mb-12">
            <p className="text-4xl font-bold text-gray-600 dark:text-gray-100 mb-3">
              Collections
            </p>
            <p className="text-gray-600 dark:text-gray-100">
              Discover List of Top Places By Collection
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/dental 1.jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (5).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Traditional Restaurants
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (1).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Trending This Week
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (2).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Luxury Houses
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (7).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Cheap In Town
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (4).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (6).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
              <div className="relative w-56 h-64 overflow-hidden shadow-md hover:shadow-lg">
                <img
                  src={require("../assets/res-pic (3).jpg")}
                  alt=""
                  className="rounded w-full h-full object-cover shadow"
                />
                <div className="bg-gradient-to-t from-black via-transparent inset-0 absolute rounded"></div>
                <div className="absolute bottom-2 left-3">
                  <p className="text-white text-lg font-semibold">
                    Newly Opened
                  </p>
                  <p className="text-white text-sm">21 Places</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button className="rounded-md py-2.5 px-4 bg-white dark:bg-gray-800 border border-gray-100 text-lg shadow hover:shadow-lg text-gray-600 dark:text-gray-100">
                🎁 More Collections
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
