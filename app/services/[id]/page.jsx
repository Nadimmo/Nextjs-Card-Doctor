"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Booking = () => {
  const { id } = useParams();
  const [cartes, setCart] = useState([]);
  const service = cartes.find((cart) => cart.id === id);
//   const {title, price}  = service
  console.log(service.title);

  useEffect(() => {
    axios.get("/services.json").then((res) => {
      setCart(res.data);
    });
  }, []);

const handleSubmit = (e)=>{
    e.preventDefault()
    const from = e.target;
    const title = from.title.value;
    const email = from.email.value;
    const price = from.price.value;
    const date = from.date.value;
    const info = {
        title,email,price,date
    }
    console.log(info);
     
}

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Please File Up This Form And Booking Complete
      </h1>
      <br />
      <br />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0  bg-base-100">
            <form onSubmit={handleSubmit} className="card-body grid lg:grid-cols-2 lg:w-[800px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="title"
                  className="input input-bordered"
                  required
                  defaultValue={service.title}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  name="date"
                  type="datetime-local"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  className="input input-bordered"
                  required
                  defaultValue={service.price}
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white lg:w-[730px]">
                  Booking Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Booking;
