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
```

---

## 🚧 Challenges Faced & Solutions

### 1. Google OAuth Setup

Initially, configuring Google OAuth with Supabase was confusing due to redirect URLs and credentials setup. This was resolved by carefully configuring the OAuth client in Google Cloud and matching redirect URLs in Supabase.

---

### 2. Real-time Updates

Implementing real-time bookmark updates required setting up Supabase realtime subscriptions and handling React state updates correctly.

I also encountered a `useEffect dependency array` error because the dependency list changed between renders. This was fixed by ensuring the dependency array remained consistent.

---

### 3. Private User Data (Security)

To make bookmarks private, I implemented Supabase Row Level Security (RLS) policies so each user can only access their own records.

---

### 4. Deployment Issues

Environment variables were not working initially on Vercel. The issue was resolved by adding the Supabase keys in Vercel environment settings.

---

## 📚 What I Learned

* Implementing OAuth authentication flow
* Using Supabase for full backend functionality
* Handling real-time database updates
* Managing React state with realtime events
* Deploying production apps on Vercel