import prisma from "@/lib/prisma";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                email:{label:"Email", type:"email", placeholder:"Email"},
                password:{label:"Password", type: "password",placeholder:"pass"}
            },
            async authorize(credentials){
                if(!credentials?.email && !credentials?.password){
                    throw new Error("invalid inputs mare boi")
                }
               
              const existingUser = await prisma.user.findFirst({
                where:{ email : credentials?.email}
              });
              if(!existingUser){
                throw new Error("User not found mare boi")
              }
              const isValid = credentials.password === existingUser.password
              if(!isValid ){
                throw new Error ("Wrong pass mare boii")
              }
              return{
                id: existingUser.id.toString(),
                email: existingUser.email,
              }
           }
        }
    )
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        jwt:({token, user}) => {
            console.log(token)
            token.bosdi ="beneh ke lod"
            return token;
        },
        session:({session, token}: any) =>{
            session.user.id = token.sub
            return session
        }
    },
    pages:{
        signIn: "/signin",
        signOut: "/signin"
    }
}
