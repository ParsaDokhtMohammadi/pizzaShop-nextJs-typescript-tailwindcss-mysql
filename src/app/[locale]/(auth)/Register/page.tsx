"use client";
import { useState, useTransition } from "react";
import { RegisterAction } from "./actions";

export default function RegisterPage() {
  const [message, setMessage] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      className="flex flex-col gap-2"
      action={async (formData: FormData) => {
        startTransition(async () => {
          try {
            await RegisterAction(formData);
            setMessage("User created successfully! ✅");
          } catch (err: any) {
            setMessage(err.message || "Something went wrong ❌");
          }
        });
      }}
    >
      <input name="username" type="text" placeholder="Username" className="border p-2 rounded" />
      <input name="email" type="email" placeholder="Email" className="border p-2 rounded" />
      <input name="password" type="password" placeholder="Password" className="border p-2 rounded" />
      <button type="submit" className="btn bg-primary text-white p-2 rounded">
        {isPending ? "Registering..." : "Register"}
      </button>

      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
