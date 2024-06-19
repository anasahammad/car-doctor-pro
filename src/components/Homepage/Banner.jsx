import Image from "next/image"

import baner1 from "../../../public/assets/images/banner/1.jpg"
import baner2 from "../../../public/assets/images/banner/2.jpg"
import baner3 from "../../../public/assets/images/banner/3.jpg"
import baner4 from "../../../public/assets/images/banner/4.jpg"
import baner5 from "../../../public/assets/images/banner/5.jpg"
import baner6 from "../../../public/assets/images/banner/6.jpg"


const Banner = () => {
    return (
        <div className="container mx-auto ">
            <div className="carousel  w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <Image src={baner1} width="100vw" height="100vh" alt="banner1" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] text-white mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    <div className="absolute flex   transform -translate-y-1/2 gap-5 right-5 bottom-0 ">
      <a href="#slide6" className="btn btn-circle text-white active:text-[#FF3811]">❮</a> 
      <a href="#slide2" className="btn btn-circle text-white active:text-[#FF3811]">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <Image src={baner2} width="100vw" height="100vh" alt="banner1" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] text-white mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle text-white active:text-[#FF3811]">❮</a> 
      <a href="#slide3" className="btn btn-circle text-white active:text-[#FF3811]">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <Image src={baner3} width="100vw" height="100vh" alt="banner1" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] text-white mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle text-white active:text-[#FF3811]">❮</a> 
      <a href="#slide4" className="btn btn-circle text-white active:text-[#FF3811]">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <Image src={baner4} width="100vw" height="100vh" alt="banner1" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] text-white mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle text-white active:text-[#FF3811]">❮</a> 
      <a href="#slide5" className="btn btn-circle text-white active:text-[#FF3811]">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <Image src={baner5} width="100vw" height="100vh" alt="banner1" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] text-white mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle text-white active:text-[#FF3811]">❮</a> 
      <a href="#slide6" className="btn btn-circle text-white active:text-[#FF3811]">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <Image src={baner6} width="100vw" height="100vh" alt="banner1" className="w-full rounded-xl" />
    <div className="absolute rounded-xl flex items-center h-full transform  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
        <div className="text-white space-y-7 pl-12 w-1/2">
            <h2 className="text-6xl font-bold">Affordable Price For Car Servicing</h2>
            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn bg-[#FF3811] text-white mr-5">Discover More</button>
            <button className="btn btn-outline btn-secondary">Latest Project</button>
        </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2 gap-5 right-5 bottom-0">
      <a href="#slide5" className="btn btn-circle text-white active:text-[#FF3811]">❮</a> 
      <a href="#slide1" className="btn btn-circle text-white active:text-[#FF3811]">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;