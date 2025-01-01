"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default  function Home() {
const session = useSession()
return<div className=" flex justify-center text-3xl p-10">
  hello from main
  <button className="p-10" onClick={()=>signIn()}> signin</button>
  <button onClick={()=>signOut(
    {callbackUrl:"/signin"}
  )}> signout</button>
  {JSON.stringify(session)}
</div>
}
