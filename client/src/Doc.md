# thư viện sẽ sữ dụng do mới nghiên cứu

Lúc trước mình hay sữ dụng các thư viện như

-Style sẵn (Mui,And design...) Phù hợp với các dự án có sẵn  desgin  sẵn theo phong cách của thư viện , hoặc dự án không cần design Nhưng khó custom

- Gần đây mình có nghiên cứu được 1 thư viện khác  Unstyle(Radix UI,  Prime react) phù hợp  với mọi dự án đặc biệt là những dự án đặc biệt  hoặc custom cá biệt  caanf chúng ta phải nhúng tay vào  nhưng tón thời gian custom

# ShadCi  UI sinh ra để giải quyết điểm yếu 

# cơ chế rendering 

có 2 môi trường  mà web chúng ta có thể rendering
 
 clent : đại diện trình duyệt người dùng
 Sever :  đại diện cho máy chủ nới chứa data  trả về reponse

 vì next js  có khả năng render code react ở server và client nên đôi khi dev hiểu lầm  rằng 2 mt là 1 

 Với next js  code lúc nào cũng phải phân biệt rõ ràng giữa `use client ` hoặc  `use server`

 ví dụ ở môi trường  client muốn truy cập data ở server thì cần phải gữi 1 request  mới đến server mới lấy được 


 # client compoem t

 ## react spa truyền thông (react vite)... là 1 client component khổng lồ

 