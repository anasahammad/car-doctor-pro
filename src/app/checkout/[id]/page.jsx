"use client"
import DetailsBanner from "@/components/DetailsBanner";
import { getServiceDetails } from "@/services/getServices";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const Checkout = ({params}) => {
const [service, setService] = useState({})
    const {data} = useSession()
    const loadService = async ()=>{
        const details = await getServiceDetails(params.id)
        setService(details.service)

    }

    const { _id, title, description, img, price, facility } = service || {};

    const handleBooking = async (event)=>{
        event.preventDefault()

        const newBooking = {
            email : data?.user?.email,
            name: data?.user?.name,
            address : event.target.address.value,
            phone: event.target.phone.value,
            date: event.target.date.value,
            serviceTitle : title,
            serviceID : _id,
            price : price,
        }

        console.log(newBooking);

        const res = await fetch('http://localhost:3000/checkout/api/new-booking', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(newBooking)
        })

        console.log(res)
        if(res.status === 200){
            console.log("booking added Successfully");
            event.target.reset()
        }
    }

    useEffect(()=>{
        loadService()
    }, [params])
    return (
        <div>
            <div className="container mx-auto">

            <DetailsBanner text="Checkout"/>

            <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input 
              defaultValue={data?.user?.name} 
               type="text" name="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input defaultValue={new Date().getDate()} type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              defaultValue={data?.user?.email}
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
              defaultValue={price}
              readOnly
                type="text"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
              required
                type="text"
                name="phone"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Present Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
            </div>
        </div>
    );
};

export default Checkout;