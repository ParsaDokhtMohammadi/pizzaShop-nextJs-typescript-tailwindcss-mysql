"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { locale } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setMessage(result.error);
    } else {
      setMessage("ورود موفقیت آمیز بود!");
      router.push(`/${locale}/dashboard`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="btn bg-primary text-white p-2 rounded">
          Login
        </button>
      </form>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
