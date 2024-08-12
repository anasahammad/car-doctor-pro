"use client"

import DetailsBanner from "@/components/DetailsBanner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePage = ({params}) => {
    const {data} = useSession()
    const [booking, setBooking] = useState()
    const router = useRouter()
    const loadBooking = async ()=>{
        const res = await fetch(`${process.env.BASE_URL}/my-bookings/api/delete-booking/${params.id}`)
        const data = await res.json()
        setBooking(data.response)
        

    }

    const handleUpdate = async (event)=>{
        event.preventDefault()

        const updatedInfo = {
            phone: event.target.phone.value,
            address : event.target.address.value,
            date : event.target.date.value
        }

       const res = await fetch(`${process.env.BASE_URL}/my-bookings/api/delete-booking/${params.id}`, {
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body : JSON.stringify(updatedInfo)
       })

        console.log(res)
        if(res.status === 200){
            alert("Updated Successful")
            router.push('/my-bookings')

        }
    }

    useEffect(()=>{
        loadBooking()
    }, [params])
    return (
        <div>
            <div className="container mx-auto">

            <DetailsBanner text="Update Booking"/>

            <div className="my-12 bg-slate-300 p-12">
        <form onSubmit={handleUpdate}>
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
              <input defaultValue={booking?.date} type="date" name="date" className="input input-bordered" />
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
              defaultValue={booking?.price}
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
              defaultValue={booking?.phone}
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
              defaultValue={booking?.address}
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

export default UpdatePage;