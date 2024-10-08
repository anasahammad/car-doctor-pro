import { connectDb } from "@/lib/connectDb";
import NextAuth from "next-auth/next"
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
 const handler =  NextAuth({
    secret : process.env.SECRET_KEY,
    session: {
        strategy: 'jwt',
        maxAge:  30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email : {},
                password: {}
            },
            async authorize(credentials){
                const {email, password} = credentials;

                if(!email || !password){
                    return null
                }

                const db = await connectDb()
                const currentUser = await db.collection('users').findOne({email})
                if(!currentUser){
                    return null
                }

                const matchedPassword = bcrypt.compareSync(password, currentUser.password);

                if(!matchedPassword){
                    return null
                }

                return currentUser
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
          GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
          })
    ],
    callbacks: {
    async signIn({ user, account }) {
            if(account.provider === 'google' || account.provider === 'github'){
                const {name, email, image} = user;
                try {
                    const db = await connectDb()
                    const userCollection  = await db.collection('users')
                    const isExist = await userCollection.findOne({email})
                    if(!isExist){
                        const res = await userCollection.insertOne(user)
                        return user;
                    }
                    else{
                        return user;
                    }
                } catch (error) {
                    
                }
            }
            else{
                return user;
            }
          },
    },
    pages: {
        signIn: '/login'
    }
 })

 export {handler as GET, handler as POST}