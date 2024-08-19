import { PrismaClient, Prisma } from "@prisma/client";
import { User } from "../types/User";
const prisma  = new PrismaClient()
import  * as bcrypt from "bcrypt"

export const createUserDatabase = async (reqUser: User) => {
  const savedUser  = await prisma.user.create({
      data: {
        name: reqUser.name,
        email: reqUser.email,
        password: (await bcrypt.hash(reqUser.password, 10)).toString()

      },
    })  

    // console.log(await bcrypt.compareSync(reqUser.password, savedUser.password))
    
  return savedUser
}

export const  checkUserEmail = async(userEmail:string) => {
  const user = await prisma.user.findUnique({where: {
    email: userEmail
  }})
  
  return user
}

export const findUserDatabase = async (userId: string) => {
  const user = await prisma.user.findUnique({where: {
    id: userId
  }})

  return user
}