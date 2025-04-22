my-nextjs-app/
├── app/
│ ├── layout.tsx # Bố cục tổng thể (header, footer, body)
│ ├── page.tsx # Trang chính ("/")
│ └── [route]/ # Các route con, ví dụ: /about, /dashboard, ...
│ ├── page.tsx
│ └── layout.tsx # (tuỳ chọn) layout riêng cho route này
│
├── public/ # File tĩnh: hình ảnh, favicon, v.v.
│ └── images/
│
├── styles/ # File CSS/SCSS, hoặc Tailwind config
│ └── globals.css
│
├── components/ # Các UI component tái sử dụng
│ └── Navbar.tsx
│
├── lib/ # Hàm helper, kết nối DB, API client
│ └── prisma.ts
│
├── middleware.ts # Middleware Next.js (ví dụ: auth, redirect)
├── next.config.js # Cấu hình Next.js
├── tsconfig.json # Cấu hình TypeScript
├── package.json # Quản lý dependencies & scripts
└── .env.local # Biến môi trường (env)
