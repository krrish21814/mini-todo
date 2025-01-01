import prisma from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions ={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:"Email", placeholder:"Email", type:"email"},
                password:{label:"PAssword", placeholder:"Pass", type:"password"}
            },
            
            async authorize(credentials){
                if(!credentials?.email && !credentials?.password){
                    throw new Error("Invalid inputs mare boii")
                }
                try{
              const existingUser = await prisma.user.findFirst({
                    where:{email: credentials.email}
                })
                if(!existingUser){
                    throw new Error ("User does not exist mare boii")
                }
                const isValid = credentials.password === existingUser.password
                 if(!isValid){
                    throw new Error("wrong pass mare boii")
               }
                return {
                    id: existingUser.id.toString(),
                    email: existingUser.email
                }
            }catch(error){
                throw new Error("Unexpected Error mare boii")
            }}
        })
    ],
    secret:process.env.NEXT_SECRET || "SECRET",
    callbacks:{
        session:({session,token}: any) =>{
            session.user.id = token.sub
            return session
        }
    }
}