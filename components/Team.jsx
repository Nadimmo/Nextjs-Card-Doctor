/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
const Team = () => {
  return (
    <div className="py-6 ml-20">
      <div>
        <p className="text-xl text-[#FF3811] py-2 font-bold text-center">
          Team
        </p>
        <h1 className="text-4xl text-center font-bold">Meet Our Team</h1>
        <p className="text-x py-3 text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="card w-80 bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
          {/* Image */}
          <figure className="px-4 pt-4">
            <Image
              src="https://i.ibb.co.com/F4GHhXTf/Nadim.png"
              alt="member"
              width={300}
              height={300}
              unoptimized
              priority
              className="rounded-2xl w-full h-72 object-cover bg-base-200 group-hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Body */}
          <div className="card-body items-center text-center px-6">
            <h2 className="card-title font-bold text-xl">Car Engine Plug</h2>

            <p className="text-sm text-gray-500 tracking-wide">Engine Expert</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 transition cursor-pointer">
                <FcGoogle />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer">
                <FaFacebook />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition cursor-pointer">
                <FaLinkedin />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-sky-100 hover:text-sky-500 transition cursor-pointer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
          {/* Image */}
          <figure className="px-4 pt-4">
            <Image
              src="https://i.ibb.co.com/F4GHhXTf/Nadim.png"
              alt="member"
              width={300}
              height={300}
              unoptimized
              priority
              className="rounded-2xl w-full h-72 object-cover bg-base-200 group-hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Body */}
          <div className="card-body items-center text-center px-6">
            <h2 className="card-title font-bold text-xl">Car Engine Plug</h2>

            <p className="text-sm text-gray-500 tracking-wide">Engine Expert</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 transition cursor-pointer">
                <FcGoogle />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer">
                <FaFacebook />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition cursor-pointer">
                <FaLinkedin />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-sky-100 hover:text-sky-500 transition cursor-pointer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
          {/* Image */}
          <figure className="px-4 pt-4">
            <Image
              src="https://i.ibb.co.com/F4GHhXTf/Nadim.png"
              alt="member"
              width={300}
              height={300}
              unoptimized
              priority
              className="rounded-2xl w-full h-72 object-cover bg-base-200 group-hover:scale-105 transition-transform duration-300"
            />
          </figure>

          {/* Body */}
          <div className="card-body items-center text-center px-6">
            <h2 className="card-title font-bold text-xl">Car Engine Plug</h2>

            <p className="text-sm text-gray-500 tracking-wide">Engine Expert</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 transition cursor-pointer">
                <FcGoogle />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 transition cursor-pointer">
                <FaFacebook />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition cursor-pointer">
                <FaLinkedin />
              </a>

              <a className="text-2xl p-2 rounded-full bg-gray-100 hover:bg-sky-100 hover:text-sky-500 transition cursor-pointer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Team;
