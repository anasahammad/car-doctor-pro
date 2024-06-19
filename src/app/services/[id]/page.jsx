import DetailsBanner from "@/components/DetailsBanner";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { getServiceDetails, getServices } from "@/services/getServices";
import Link from "next/link";

export const metadata = {
    title : "Details",
    description: "Car doctor details"
}

const PageDetails =async  ({params}) => {

    const {services} = await getServices()
    // console.log(services);

    const {service} = await getServiceDetails(params.id)
    console.log(service);
    const {img, title, description,  facility, price, _id} = service;

    return (
        <div className="container  mx-auto">
      <DetailsBanner text="Service Details" />

      <div className="my-6">
        <div className="flex justify-between">
          <div className="w-2/3">
            <Image width="600" height="200" src={img} alt="banner" />
          </div>
          <div className="bg-[#F3F3F3] p-6 ">
            <div className="flex flex-col space-y-4">
              <h3 className="text-[#151515] text-[25px]">Services</h3>

             <div className=" p-4">
                {services?.map(item=> <div className="space-y-4 py-2" key={item._id}>
                    <div  className="hover:bg-[#FF3811] hover:text-white bg-white px-6 py-2  flex items-center justify-between ">
                    <button>{item.title}</button>
                    <FaArrowRightLong className="text-[#FF3811] hover:text-white"/>
                </div>
                </div>  )}
               
                
             </div>
              
              
            </div>
          </div>
        </div>
          </div>
                <div className="flex justify-between  ">

         <div className="w-[70%]">
         <div className="p-6 bg-gray-100 ">
            <h2 className="text-3xl font-bold text-orange-600">{title}</h2>
            <p>{description}</p>
          </div>
         </div>

                    <div className="w-[28%]">

          <div className="p-6 bg-gray-100  ">
              <Image className="w-full object-cover h-40" src={'/assets/images/checkout/checkout.png'} alt="checkout service" width={400} height={400}/>
              <div className="flex my-4">
                <h2 className="text-xl font-bold ">Price: </h2>
                <p className="text-2xl text-rose-500"> ${price}</p>
              </div>
              <Link href={`/checkout/${_id}`}>
                <button className="bg-rose-500 px-3 py-2 rounded-lg mt-2 w-full">Check out</button>
              </Link>
            </div> 
                    </div>
                </div>

          <div className="my-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 grid grid-cols-2 gap-6">
              {facility.map((item, index) => (
                <div
                  className="bg-rose-100 p-4 border-t-4 border-t-rose-500 rounded-xl"
                  key={index}
                >
                  <h2 className="text-xl font-bold">{item?.name}</h2>
                  <p>{item?.details}</p>
                </div>
              ))}
            </div>
      </div>
    </div>
        </div>

        
    );
};

export default PageDetails;