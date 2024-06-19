import { connectDb } from "@/lib/connectDb"

export const POST = async (request)=>{
    const booking = await request.json()

    try {
        const db = await connectDb()
        const bookingsCollection = await db.collection('bookings')
        const newBooking = await bookingsCollection.insertOne(booking)
        return Response.json({message: "Service Booked Successfully"}, {status : 200})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status : 500})
    }
}