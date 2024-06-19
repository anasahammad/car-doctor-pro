import { connectDb } from "@/lib/connectDb"
import { ObjectId } from "mongodb"


export const DELETE = async (request, {params})=>{
    const db = await connectDb()
    const bookingsCollection = db.collection('bookings')


    try {
   
       const res = await bookingsCollection.deleteOne({_id : new ObjectId(params.id)})
       return Response.json({message: "Bookings Deleted Successfully", response : res})

    } catch (error) {
        return Response.json({message: "Something went wrong"})
    }
}

//update booking
export const PATCH = async (request, {params})=>{
    const db = await connectDb()
    const bookingsCollection = db.collection('bookings')

    const updateInfo = await request.json()

    try {
        const query = {_id : new ObjectId(params.id)}
        const updatedDoc = {
            $set : {
              ...updateInfo
            }
        }

        const options = {
            upsert : true
        }
       const res = await bookingsCollection.updateOne(query, updatedDoc, options)
       return Response.json({message: "Bookings Updated Successfully", response : res})

    } catch (error) {
        return Response.json({message: "Something went wrong"})
    }
}



//get single booking
export const GET = async (request, {params})=>{
    const db = await connectDb()
    const bookingsCollection = db.collection('bookings')


    try {
   
       const res = await bookingsCollection.findOne({_id : new ObjectId(params.id)})
       return Response.json({message: "Bookings Found", response : res})

    } catch (error) {
        return Response.json({message: "Something went wrong"})
    }
}