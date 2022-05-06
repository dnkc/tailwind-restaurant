const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="bg-white dark:bg-gray-800 py-14 border-t dark:border-gray-700">
        <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
          <div className="flex flex-row justify-between py-0 lg:py-12 gap-12 lg:gap-0">
            <div>
              <p className="uppercase font-bold mb-2 text-gray-600 dark:text-gray-100">
                Company
              </p>
              <ul>
                <li className="text-gray-600 dark:text-gray-100">Who We Are</li>
                <li className="text-gray-600 dark:text-gray-100">Contact Us</li>
                <li className="text-gray-600 dark:text-gray-100">Support</li>
              </ul>
            </div>
            <div>
              <p className="uppercase font-bold mb-2 text-gray-700 dark:text-gray-100">
                Business
              </p>
              <ul>
                <li className="text-gray-600 dark:text-gray-100">
                  Claim Business
                </li>
                <li className="text-gray-600 dark:text-gray-100">Advertise</li>
              </ul>
            </div>
            <div>
              <p className="uppercase font-bold mb-2 text-gray-700 dark:text-gray-100">
                Company
              </p>
              <ul>
                <li className="text-gray-600 dark:text-gray-100">Who We Are</li>
                <li className="text-gray-600 dark:text-gray-100">Contact Us</li>
                <li className="text-gray-600 dark:text-gray-100">Support</li>
                <li className="text-gray-600 dark:text-gray-100">
                  Privacy Policy
                </li>
                <li className="text-gray-600 dark:text-gray-100">
                  Terms & Conditions
                </li>
              </ul>
            </div>
            <div>
              <p className="uppercase font-bold mb-2 text-gray-700 dark:text-gray-100">
                Follow Us
              </p>
              <div className="flex gap-2">
                <a href="/">
                  <img src={require("../assets/icons/fb.png")} alt="" />
                </a>
                <a href="/">
                  <img src={require("../assets/icons/tr.png")} alt="" />
                </a>
                <a href="/">
                  <img src={require("../assets/icons/tg.png")} alt="" />
                </a>
                <a href="/">
                  <img src={require("../assets/icons/ig.png")} alt="" />
                </a>
              </div>
              <div className="mt-10">
                <label className="switch relative block w-[4rem] h-9">
                  <input
                    type="checkbox"
                    className="theme-toggle-btn hidden peer checked:bg-black"
                  />
                  <span className="bg-yellow-400 peer-checked:bg-gray-700 peer-checked:before:translate-x-full transition-all shadow-lg absolute inset-0 cursor-pointer rounded-full before:shadow-sm before:shadow-gray-800 before:content-['☀'] before:flex before:justify-center before:items-center before:absolute before:h-7 before:w-7 before:bg-white dark:bg-gray-800 before:rounded-full before:inset-1 peer-checked:before:bg-white dark:peer-checked:before:bg-gray-800 peer-checked:before:content-['🌙'] before:transition-all"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <p className="text-gray-600 dark:text-gray-100 tex-sm">
              2021 © Tail List. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
