// import person from "../../../assets/images/about_us/person.jpg";
// import parts from "../../../assets/images/about_us/parts.jpg";
import Image from "next/image";

const About = () => {
    return (
        <div className="hero container mx-auto min-h-screen my-16">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
    <Image  src="/assets/images/about_us/person.jpg" alt="person" width="400" height="600" className=" rounded-lg shadow-2xl" />
    <Image src="/assets/images/about_us/parts.jpg" alt="parts" width="400" height="600" className=" absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
    </div>
    <div className="lg:w-1/2 space-y-5">
        <h3 className="text-3xl font-bold text-[#FF3811]">About Us</h3>
      <h1 className="text-5xl font-bold text-[#151515]">We are qualified & of experience in this field</h1>
      <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="btn bg-[#FF3811] text-white ">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;