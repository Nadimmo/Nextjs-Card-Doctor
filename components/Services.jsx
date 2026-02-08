    /* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
"use client"
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";


const Services = () => {


  return (
    <div className="mt-24 mb-12 px-4 lg:px-0">
  {/* Section Header */}
  <div className="max-w-3xl mx-auto text-center">
    <p className="text-xl text-[#FF3811] font-bold tracking-wide">
      Services
    </p>

    <h1 className="text-4xl md:text-5xl font-bold mt-2">
      Our Service Area
    </h1>

    <p className="text-gray-500 mt-4 leading-relaxed">
      The majority have suffered alteration in some form, by injected humour,
      or randomised words which don't look even slightly believable.
    </p>
  </div>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
    {cartes.map((cart) => (
      <div
        key={cart.id}
        className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 group"
      >
        {/* Image */}
        <figure className="px-4 pt-4">
          <Image
            src={cart?.img}
            alt={cart?.title}
            width={400}
            height={260}
            className="rounded-2xl object-cover w-full h-56 group-hover:scale-105 transition-transform duration-300"
            priority
            unoptimized
          />
        </figure>

        {/* Card Body */}
        <div className="card-body px-6">
          <h2 className="card-title text-lg font-bold">
            {cart?.title}
          </h2>

          <div className="flex items-center justify-between mt-4">
            <p className="text-[#FF3811] text-xl font-bold">
              $ {cart?.price}
            </p>

            <Link
              href={`/services/${cart?.id}`}
              className="text-[#FF3811] text-2xl hover:translate-x-1 transition-transform"
            >
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Button */}
  <div className="flex justify-center mt-14">
    <button className="btn btn-outline btn-error px-10 text-lg">
      More Services
    </button>
  </div>
</div>

  );
};

export default Services;

const cartes = [
    {
        "id": "1",
        "service_id": "04",
        "title": "Engine Oil Change",
        "img": "https://i.ibb.co/T2cpBd5/888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "id": "2",
        "service_id": "05",
        "title": "Battery Charge",
        "img": "https://i.ibb.co/ydCbDN3/5555.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "id": "3",
        "service_id": "01",
        "title": "Full car Repair",
        "img": "https://i.ibb.co/R6Z2nFM/55.jpg",
        "price": "200.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "id": "4",
        "service_id": "02",
        "title": "Engine Repair",
        "img": "https://i.ibb.co/5MvmD2g/88.jpg",
        "price": "150.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "id": "5",
        "service_id": "03",
        "title": "Automatic Services",
        "img": "https://i.ibb.co/wh7t3N3/555.jpg",
        "price": "30.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    },
    {
        "id": "6",
        "service_id": "06",
        "title": "Electrical System",
        "img": "https://i.ibb.co/KzCG8qr/8888.jpg",
        "price": "20.00",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
        "facility": [
            {
                "name": "Instant Car Services",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "24/7 Quality Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Easy Customer Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            },
            {
                "name": "Quality Cost Service",
                "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
            }
        ]
    }
]