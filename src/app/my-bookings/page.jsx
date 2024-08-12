"use client"
import DetailsBanner from "@/components/DetailsBanner";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const MyBookings = () => {
    const session = useSession()
    const [bookings, setBookings] = useState([])

    const loadData = async ()=>{
        const res = await fetch(`${process.env.BASE_URL}/my-bookings/api/${session?.data?.user?.email}`)
        const data = await res.json()
        setBookings(data.myBookings)
      
    }

    // console.log(bookings);

 

 const handleDelete = async (id)=>{
    const deleted = await fetch(`${process.env.BASE_URL}/my-bookings/api/delete-booking/${id}`, {
        method: "DELETE"
    })
    const res = await deleted.json()

    if(res?.response.deletedCount > 0){
        loadData()
        alert("Deleted Successfully")
    }
 }

 useEffect(()=>{
    loadData()
}, [session])
    return (
        <div>
          <div className="container mx-auto">
            <DetailsBanner text="My Bookings"/>

            <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bookings?.map(({ serviceTitle, _id, date, price }, idx) => (
                <tr key={_id}>
                  <th>{idx + 1}</th>
                  <td>{serviceTitle}</td>
                  <td>{price}</td>
                  <td>{date}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Link href={`/my-bookings/update/${_id}`}><button class="btn btn-primary">Edit</button></Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        class="btn btn-error"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
          </div>
        </div>
    );
};

export default MyBookings;