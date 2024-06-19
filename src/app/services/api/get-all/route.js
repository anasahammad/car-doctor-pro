import { connectDb } from "@/lib/connectDb"


export const GET = async ()=>{
    const db = await connectDb()
    const serviceCollection = db.collection('services')

    try {
   
       const services = await serviceCollection.find().toArray()
       return Response.json({services})

    } catch (error) {
        console.log(error);
    }
}