
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginBody, LoginBodyType } from "@/schemaValidations/auth.schema"
import envConfig from "@/config"
import { stat } from "fs"
import { useToast } from "@/components/ui/use-toast"





export default function LoginForm() {
  const { toast } = useToast()
  const form = useForm<LoginBodyType>({
    resolver: zodResolver(LoginBody),
    defaultValues: {
      email: "",
      password: "",

    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof LoginBody>) {
  try {
    const result = await  fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,{
      body: JSON.stringify(values),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then( async (res) => {
       const payload = await res.json()
       const data = {
        status: res.status,
        payload
       }
       if (!res.ok) {
        return Promise.reject(data)
       } 
       return data
    })
    toast({
      description:  result.payload.message ,
     
    })
  
  } catch (error : any) {
    const erorrs = (error).payload.errors as {field:string,
      message: string}[]
     const status  = (error ).status as number
     if (status ===422){
        erorrs.forEach((error) => {
          form.setError(error.field as ('email'| 'password'),{
            type: 'server',
            message: error.message
          })
        })
     }else {
      toast({
        title: 'Lỗi',
        description:  (error).payload.message,
       
      })
     }
  }
}
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-[800px] w-full" noValidate>
        <FormField
            control={form.control}
            name="email"
        
            render={({ field }) => (
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                 <Input placeholder="Email"  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} 
        />
        <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Mật khẩu</FormLabel>
                <FormControl>
                 <Input placeholder="Mật khẩu" type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <Button type="submit" className="text-xl w-full !mt-8">Đăng nhập </Button>
    </form>
  </Form>
  )
 
}

