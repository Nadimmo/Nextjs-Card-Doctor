/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FaStar } from "react-icons/fa";
const Product = () => {
  return (
    <div className="py-10 ml-20">
      <div>
        <p className="text-xl text-[#FF3811] py-2 font-bold text-center">
          Popular Products
        </p>
        <h1 className="text-4xl text-center font-bold">Browse Our Products</h1>
        <p className="text-x py-3 text-center">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid  grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="card w-80 bg-base-100 shadow-xl">
          <Image
            src="https://i.ibb.co/KzCG8qr/8888.jpg"
            alt="product"
            width={0}
            height={0}
            unoptimized
            property="true"
            className="rounded-xl w-full h-full bg-base-200"
          />
          <div className="flex ml-24 mt-2 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <Image
            src="https://i.ibb.co/KzCG8qr/8888.jpg"
            alt="product"
            width={0}
            height={0}
            unoptimized
            property="true"
            className="rounded-xl w-full h-full bg-base-200"
          />
          <div className="flex ml-24 mt-2 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Air Filter</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <Image
            src="https://i.ibb.co/KzCG8qr/8888.jpg"
            alt="product"
            width={0}
            height={0}
            unoptimized
            property="true"
            className="rounded-xl w-full h-full bg-base-200"
          />
          <div className="flex ml-24 mt-2 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <Image
            src="https://i.ibb.co/KzCG8qr/8888.jpg"
            alt="product"
            width={0}
            height={0}
            unoptimized
            property="true"
            className="rounded-xl w-full h-full bg-base-200"
          />
          <div className="flex ml-24 mt-2 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <Image
            src="https://i.ibb.co/KzCG8qr/8888.jpg"
            alt="product"
            width={0}
            height={0}
            unoptimized
            property="true"
            className="rounded-xl w-full h-full bg-base-200"
          />
          <div className="flex ml-24 mt-2 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
        <div className="card w-80 bg-base-100 shadow-xl">
          <Image
            src="https://i.ibb.co/KzCG8qr/8888.jpg"
            alt="product"
            width={0}
            height={0}
            unoptimized
            property="true"
            className="rounded-xl w-full h-full bg-base-200"
          />
          <div className="flex ml-24 mt-2 text-2xl text-yellow-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cools Led Light</h2>
            <p className="text-xl font-bold text-[#FF3811]">$20.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
