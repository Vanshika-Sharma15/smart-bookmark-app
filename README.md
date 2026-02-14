# 📌 **Smart Bookmark App**

A simple bookmark manager where users can sign in with Google and manage their personal bookmarks. The app supports real-time updates, private user data, and deployment on Vercel.

This project was built as an assignment to demonstrate authentication, database integration, and real-time functionality using modern web technologies.

---

## 🚀 Live Demo

👉 **Live URL:** *(paste your Vercel URL here)*
👉 **GitHub Repo:** *(paste your repo link here)*

---

## ✨ Features

* 🔐 **Google Authentication**

  * Users can sign up and log in using Google OAuth (no email/password).

* ➕ **Add Bookmarks**

  * Logged-in users can save bookmarks with title and URL.

* 🔒 **Private Bookmarks**

  * Each user can only see their own bookmarks.

* ⚡ **Real-time Updates**

  * If multiple tabs are open, adding or deleting a bookmark updates instantly.

* 🗑️ **Delete Bookmarks**

  * Users can remove their own bookmarks.

* 🌐 **Deployed on Vercel**

  * Fully deployed and accessible via a live URL.

---

## 🛠 Tech Stack

* **Next.js (App Router)** → Frontend framework
* **Supabase**

  * Authentication (Google OAuth)
  * PostgreSQL database
  * Realtime subscriptions
* **Tailwind CSS** → Basic styling
* **Vercel** → Deployment

---

## 🧠 How It Works

* Google OAuth is handled using Supabase authentication.
* Bookmarks are stored in a Supabase PostgreSQL database.
* Row Level Security (RLS) ensures users only access their own data.
* Supabase realtime channels listen for database changes and update the UI instantly.

---

## ⚙️ Setup Instructions (Run Locally)

Clone the repository:

```
git clone <repo-url>
cd smart-bookmark-app
```

Install dependencies:

```
npm install
```

Create a `.env.local` file and add:

```
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

Run the app:

```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
