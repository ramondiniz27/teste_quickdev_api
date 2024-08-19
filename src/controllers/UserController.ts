import { checkUserEmail, createUserDatabase, findUserDatabase } from "../repositories/User"
import { NextFunction, Request, Response } from "express"
import { User } from "../types/User"


 export const createUser = async(req: Request, res: Response, next: NextFunction) => {
    const {name, email, password}: User = req.body
    try {
        const emailAlready = await checkUserEmail(email)
        console.log(emailAlready)
        if(!emailAlready) {
            const user = await createUserDatabase({
                name, email, password,
            })
            
            res.send({status: '200', message: 'user_created', data: user})
        } else {
            res.status(500).send({status: '500', message: `email: ${email}, already exists!`})
        }
        

    } catch(error) {
        console.log(error)
    }

}

export const findUserByID = async(req:any, res:any) => {
    const { id } = req.params

    const foundUser = await findUserDatabase(id)

    res.send(foundUser)
}
