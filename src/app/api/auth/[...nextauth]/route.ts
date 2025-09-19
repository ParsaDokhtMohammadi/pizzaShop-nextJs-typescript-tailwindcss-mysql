import NextAuth , { AuthOptions} from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { verifyPassword } from "@/utils/auth";
import { db } from "@/utils/db";
import { IUser } from "@/types/types";


export const authOptions : AuthOptions = {
  session : {strategy : "jwt"},
  providers : [
    CredentialsProvider({
      name : "credentials",
      credentials : {
        username : {label : "Username" , type : "text"},
        password : {label : "password" , type:"password"}
      },
      async authorize(credentials) {
        const {username , password} = credentials ?? {}
        if(!username || !password) throw Error("incompelete data")
        const [rows] = await db.query<IUser[]>("select * from users where username = ? limit 1",username)
        const user = rows[0]
        if(!user) throw new Error("user does not exist")
        const isValid = await verifyPassword(password , user.password)
        if(!isValid)throw new Error("data incorrect")
        return {id : user.id.toString() , role:user.role}
      }
    })
  ]
}

const handler = NextAuth(authOptions)
export {handler as GET , handler as POST}