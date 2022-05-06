const Contact = () => {
  return (
    <>
      {/* <!-- Contact Us --> */}
      <div className="bg-slate-100 dark:bg-gray-800 lg:py-32">
        <div className="w-full lg:w-11/12 xl:w-9/12 mx-auto">
          <div
            className="shadow-lg lg:rounded-xl py-12 px-12 relative bg-cover bg-center z-10"
            style={{
              backgroundImage: require("../assets/contact-us/photo-1524069290683-0457abfe42c3.jpg"),
            }}
          >
            <div className="bg-black/70 absolute inset-0 h-full lg:rounded-xl -z-10"></div>
            <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-0">
              <div className="w-full lg:w-1/2 text-gray-100">
                <div className="mb-5">
                  <p className="text-4xl font-bold font-comf mb-5">Find Us</p>
                  <div className="flex gap-6">
                    <div className="border-r border-white pr-4">
                      <p className="font-bold text-2xl font-libre">New York</p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                    <div className="border-r border-white pr-4">
                      <p className="font-bold text-2xl font-libre">
                        California
                      </p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-2xl font-libre">Delhi</p>
                      <p className="text-sm">
                        Derrick Street Boston, MA 02130 USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-white dark:bg-gray-800 max-w-lg rounded-md shadow p-6 mx-auto lg:ml-auto space-y-6 text-gray-600 dark:text-gray-100">
                  <div>
                    <p className="text-4xl font-bold font-monte mb-4">
                      Get In Touch
                    </p>
                    <p className="">Need help or have some feedback for us?</p>
                    <p className="">
                      Fill out the form below to contact our team.
                    </p>
                  </div>
                  <form action="" className="space-y-4">
                    <div className="flex text-gray-600 dark:text-gray-100 gap-10">
                      <div>
                        <label htmlFor="first-name">First Name</label>
                        <input
                          placeholder="John"
                          type="text"
                          className="bg-white dark:bg-gray-800 py-2 px-3 w-full placeholder:text-gray-600 dark:text-gray-100 rounded-md border dark:border-gray-700 mt-0.5"
                          id="first-name"
                        />
                      </div>
                      <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input
                          placeholder="Doe"
                          type="text"
                          className="bg-white dark:bg-gray-800 py-2 px-3 w-full placeholder:text-gray-600 dark:text-gray-100 rounded-md border dark:border-gray-700 mt-0.5"
                          id="last-name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        placeholder="mail@example.com"
                        type="email"
                        className="bg-white dark:bg-gray-800 py-2 px-3 w-full placeholder:text-gray-600 dark:text-gray-100 rounded-md border dark:border-gray-700 mt-0.5"
                        id="email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        rows="4"
                        placeholder="Good Job! I only have this question..."
                        className="bg-white dark:bg-gray-800 py-2 px-3 w-full placeholder:text-gray-600 dark:text-gray-100 rounded-md border dark:border-gray-700 mt-0.5"
                        id="message"
                      ></textarea>
                    </div>
                    <div>
                      <button className="py-2 px-3 rounded-md shadow bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-xl">
                        <span className="material-icons align-middle mr-1">
                          local_shipping
                        </span>
                        Get In Touch
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
