import { connectDb } from "@/lib/connectDb"
import bcrypt from "bcrypt";

export const POST = async (request)=>{

    const newUser = await request.json()
    try {
        const db = await connectDb()

        const userCollection = await  db.collection('users')
        const isExist = await userCollection.findOne({email : newUser.email})
        if(isExist) {
            return Response.json({message : "user already exist"}, {status : 304})
        }
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const res = await userCollection.insertOne({...newUser, password:hashPassword})
        return Response.json({message: "user added"}, {status : 200})
    } catch (error) {
        return Response.json({message: "something went wrong", error}, {status : 500})
    }
}