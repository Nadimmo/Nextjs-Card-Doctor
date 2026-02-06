import Image from "next/image";

const About = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
            <Image src="https://i.ibb.co.com/F4GHhXTf/Nadim.png" alt="" width={0} height={0} unoptimized
  priority className='w-3/4' />
            <Image src='https://i.ibb.co.com/F4GHhXTf/Nadim.png' alt="" width={0} height={0} unoptimized
  priority className='w-1/2 absolute top-1/2 right-5 border-[6px] border-white'/>
        </div>
       
        <div className='lg:w-1/2 lg:ml-[200px]'>
            <p className="text-xl py-4 font-bold text-orange-500">About Us</p>
          <h1 className="text-4xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <p className="py-6">
          the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;