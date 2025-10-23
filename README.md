**this project is currently under development**


A full-stack Next.js + TypeScript online pizza ordering system 
Users can browse the menu, add items to their cart, and place orders during open hours.
Admins can manage menu items, employees, orders, and discounts — with plans to add full inventory management later.

This project is built to simulate a real-world restaurant management system, while helping me deepen my experience with TypeScript, server actions, and full-stack architecture using Next.js App Router.

🧩 Features
👥 User Features

🍽️ Browse Menu – View available pizzas and sides with prices and descriptions.

🛒 Add to Cart – Add or remove items dynamically before checkout.

📦 Place Orders – Submit orders (no payment required) during open hours only.

🔐 Authentication (NextAuth) – Secure user sign-in and session management.

🧑‍💼 Admin Features (in progress)

📋 Menu Management – Add, edit, or remove items from the menu.

💸 Discount Codes – Create and manage discount campaigns.

🧑‍🍳 Staff Management – View and manage active restaurant employees.

🧾 Order Management – Track and update order statuses in real-time.

📦 Inventory System (planned) – Manage stock and ingredient levels.

🛠️ Tech Stack

Framework: Next.js (App Router)
Language: TypeScript
Styling: TailwindCSS
Forms & Validation: React Hook Form (RHF), Zod
Database: MySQL
Auth: NextAuth
File Uploads (Planned): Multer
Other: Server Actions, API Routes

📦 Installation & Setup
# Clone the repository
git clone https://github.com/ParsaDokhtMohammadi/pizzaShop-nextJs-typescript-tailwindcss-mysql

# Navigate into the project folder
cd pizzaShop-nextJs-typescript-tailwindcss-mysql

# Install dependencies
npm install

# Add environment variables in .env.local
DATABASE_URL=your_mysql_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

# Run the development server
npm run dev


Then open http://localhost:3000
 to view the app 🚀

🎯 Project Goals

Build a real-world restaurant management system from scratch

Gain deeper understanding of TypeScript in full-stack development

Practice Next.js server actions and modern data fetching

Implement reusable components and clean architecture patterns

🚀 Future Improvements

Add payment gateway integration (e.g., Stripe test mode)

Complete inventory management system

Implement order tracking for users (e.g., order status timeline)

Add analytics dashboard for admin

Improve UI/UX and responsive design
