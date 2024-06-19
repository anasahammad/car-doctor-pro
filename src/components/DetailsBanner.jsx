import Link from "next/link";
import image from "../../public/assets/images/checkout/checkout.png";


import Image from "next/image";

const DetailsBanner = ({text}) => {
  
    return (
        <div
      className="hero min-h-[300px] relative rounded-xl"
      style={{ backgroundImage: `url("/assets/images/checkout/checkout.png")` }}
    >
      <div className=" h-full rounded-xl w-full bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0.00)]"></div>
      <div className=" w-full ml-32">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-white">{text}</h1>
         
        </div>
      </div>
      <div  className="absolute bottom-0 flex justify-center items-center">
            <Image width={297} height={50} src="/assets/icons/Vector.svg" alt="vector" />
            <div className="absolute text-white font-medium">
                <Link href="/">Home</Link><span>/</span><Link href={"/"}>Service Details</Link>
            </div>

        </div>
    </div>
    );
};

export default DetailsBanner;