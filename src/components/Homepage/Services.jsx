
import Image from "next/image";
import ServiceCard from "../cards/ServiceCard";
import { getServices } from "@/services/getServices";



const Services = async () => {
    const {services} = await getServices()
   
    return (
        <div className="my-16 container mx-auto">
      <div className="text-center space-y-5">
        <h4 className="text-2xl font-bold text-[#FF3811]">Service</h4>
        <h2 className="text-4xl font-bold text-[#151515]">Our Service Area</h2>
        <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {
        services?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard> )
       }
      </div>

      <div className="flex justify-center items-center my-10">
      <button className="btn border border-[#FF3811] text-[#FF3811]  ">More Services</button>
      </div>

      <div className="bg-[#151515] text-white px-16 py-20 rounded-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex items-center gap-2">
                <div>

                
             
                <Image height="40" width={36}  src="/assets/icons/001-timetable.svg" alt="clock" />
                </div>
                <div className="">
                    <p>We are open monday-friday</p>
                    <h1 className="text-xl  font-bold">7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div>

                <Image height="40" width={36} src="/assets/icons/Group 34.svg" alt="telephone" />
                
                </div>
                <div className="">
                    <p>Have a question?</p>
                    <h1 className="text-xl  font-bold">+2546 251 2658</h1>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div>

                
                <Image height="40" width={36} src="/assets/icons/Group 35.svg"  alt="location" />
                </div>
                <div className="">
                    <p>Need a repair? our address</p>
                    <h1 className="text-xl  font-bold">Liza Street, New York</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Services;