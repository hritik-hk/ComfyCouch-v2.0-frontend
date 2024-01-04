import { FaXTwitter, FaFacebook, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black text-white pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">{`Let's keep in touch!`}</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaXTwitter className="text-black text-lg" />
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebook className="text-black text-lg"  />
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaGithub className="text-black text-lg"  />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        About Us
                      </p>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Blog
                      </p>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/hritik-hk"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Free Products
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        MIT License
                      </p>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Terms &amp; Conditions
                      </p>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Privacy Policy
                      </p>
                    </li>
                    <li>
                      <p className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                        Contact Us
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span>{new Date().getFullYear()}</span>
                <span className="text-blueGray-500 hover:text-gray-800">
                  {" "}
                  Created by
                </span>
                <span className="text-blueGray-500 hover:text-blueGray-800">
                {" "}
                  HRITIK KUMAR
                </span>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
