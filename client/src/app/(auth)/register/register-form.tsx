
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
import { RegisterBody, RegisterBodyType } from "@/schemaValidations/auth.schema"
import envConfig from "@/config"





export default function RegisterForm() {
  const form = useForm<RegisterBodyType>({
    resolver: zodResolver(RegisterBody),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  })
 
  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof RegisterBody>) {
  const result = await  fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}/auth/register`,{
      body: JSON.stringify(values),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json())
    console.log("result",result)
  }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 max-w-[800px] w-full" noValidate>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Tên</FormLabel>
            <FormControl>
              <Input placeholder="Tên" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
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
        <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Xác nhận mật khẩu</FormLabel>
                <FormControl>
                 <Input placeholder="xác nhận mật khẩu" type="password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
      <Button type="submit" className="text-xl w-full !mt-8">Đăng kí </Button>
    </form>
  </Form>
  )
 
}
