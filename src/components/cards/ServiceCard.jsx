import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({service}) => {
    const {title, img, price, _id} = service;
    return (
        <div className="card bg-base-100 shadow-xl ">
  <figure className="p-4 ">
    <Image src={img} width={400} height={300} alt="image" className="rounded-xl h-" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-[#444]">{title}</h2>
    <div className="flex text-[#FF3811] text-xl ">

    <p className="font-semibold">${price}</p>
    <Link href={`/services/${_id}`}>
    <FaArrowRightLong/>
    </Link>
        
    </div>
   
  </div>
</div>
    );
};

export default ServiceCard;