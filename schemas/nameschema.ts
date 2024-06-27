"use client"

import { z } from "zod"

const nameschema = z.object({
  name: z.string().min(2).max(50),
  id: z.string().min(1).max(3),
  isCompleted: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()

})
export {nameschema};
