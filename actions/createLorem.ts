"use server"

import prisma from "@/lib/db"
import { nameschema } from "@/schemas/nameschema"

import {z} from "zod"




export const  createLorem = async(values:z.infer<typeof nameschema>) => {

    const validatedValues= nameschema.safeParse(values)
    
    if (!validatedValues.success){
        return{
            error: "invalid values"
        }
    }

    await prisma.lorem.create(
        {
            data:{
                name: validatedValues.data?.name,
                isCompleted: true

            }
        }
    )
 
}