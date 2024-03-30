"use client";
import React, { FormEvent } from "react";

function FormElement() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
    console.log(formData.get("password"), formData.get("email"))
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-[500px] gap-4 text-violet-800"
    >
      <input name="email" type="email" />
      <input name="password" type="password" />
      <button type="submit" className="bg-red-500">
        Submit
      </button>
    </form>
  );
}

export default FormElement;
