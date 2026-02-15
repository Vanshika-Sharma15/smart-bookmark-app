## 🚧 Challenges Faced and How I Solved Them

### **1. Google OAuth Configuration Issues**

While setting up Google login, authentication initially failed because the OAuth credentials were not configured correctly in Google Cloud and Supabase.

**Problem:**

* Redirect URLs were not matching
* Authentication failed after Google login
* Supabase session was not created

**Solution:**

* Created OAuth credentials in Google Cloud Console
* Added authorized redirect URL from Supabase dashboard
* Configured Google provider in Supabase Auth settings
* Verified environment variables in `.env.local`

After fixing the redirect URLs, authentication worked successfully.

---

### **2. Understanding Supabase Realtime Subscriptions**

Implementing real-time updates was initially confusing because I had to understand how Supabase listens to database changes.

**Problem:**

* Bookmark list was not updating across tabs
* Real-time subscription was not triggering
* Incorrect useEffect configuration caused errors

**Solution:**

* Used Supabase `channel()` and `postgres_changes` listener
* Subscribed to insert and delete events
* Updated React state when database changes occurred
* Fixed `useEffect` dependency array to prevent re-render issues

This allowed bookmarks added in one tab to instantly appear in another.

---

### **3. Ensuring Bookmarks Are Private Per User**

I needed to ensure that users could only see their own bookmarks.

**Problem:**

* Initially all bookmarks were visible to every user
* Data filtering was not implemented properly

**Solution:**

* Stored `user_id` with each bookmark
* Fetched bookmarks using the authenticated user's ID
* Filtered database queries using user session

This ensured complete data isolation between users.

---

### **4. Git Push and Merge Conflicts**

While pushing changes to GitHub, I encountered push rejections because the remote repository had updates that were not present locally.

**Problem:**

* Git push failed with non-fast-forward error
* Merge conflict in README file

**Solution:**

* Pulled remote changes using `git pull origin main`
* Resolved merge conflicts manually
* Committed and pushed again successfully

---

### **5. Session Behavior Across Multiple Tabs**

When testing logout in multiple tabs, I noticed logging out in one tab did not automatically log out the other tab.

**Problem:**

* Logout state not syncing across tabs

**Solution:**

* Learned that Supabase stores session locally in each tab
* This behavior is expected unless global session listeners are implemented

---

### **6. Environment Variables in Deployment**

During deployment on Vercel, authentication failed because environment variables were not configured.

**Problem:**

* Supabase client keys were missing in production
* Login failed on deployed version

**Solution:**

* Added Supabase URL and anon key in Vercel environment variables
* Redeployed the project

---

## ✅ What I Learned

* Implementing OAuth authentication
* Working with Supabase database and realtime features
* Managing user sessions securely
* Handling Git merge conflicts
* Deploying full-stack applications on Vercel

---

# 📌 **Smart Bookmark App**

A simple bookmark manager where users can sign in with Google and manage their personal bookmarks. The app supports real-time updates, private user data and deployment on Vercel.

This project was built as an assignment to demonstrate authentication, database integration and real-time functionality using modern web technologies.

---

## 🚀 Live Demo

👉 **Live URL:** https://smart-bookmark-app-eta-vert.vercel.app/
👉 **GitHub Repo:** https://github.com/Vanshika-Sharma15/smart-bookmark-app

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
git clone https://github.com/Vanshika-Sharma15/smart-bookmark-app
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
