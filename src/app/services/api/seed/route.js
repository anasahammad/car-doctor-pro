import { connectDb } from "@/lib/connectDb"
import { services } from "@/lib/services";

export const GET = async ()=>{
    const db = await connectDb()
    const serviceCollection = db.collection('services')

    try {
       await serviceCollection.deleteMany();
       const res = await serviceCollection.insertMany(services)
       return Response.json({message : "Services added"})

    } catch (error) {
        console.log(error);
    }
}