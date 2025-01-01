import withAuth from "next-auth/middleware";

export default withAuth({
    pages:{
        signIn:"/signin"
    }
})
console.log("NEXTAUTH_SECRET:", process.env.NEXT_SECRET);

export const config = {
    matcher: ["/((?!signin).*)"],
  };
  