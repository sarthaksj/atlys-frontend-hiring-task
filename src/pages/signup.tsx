import React from "react";
import AuthCard from "../components/authcard";
import LoginIcon from "../assets/login.svg";
import Input from "../components/ui/input";

const SignUp = () => {
  const notImplemented = () => {
    alert("function not implemented yet");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    notImplemented();
  };

  return (
    <div className="flex h-full items-center justify-center">
      <AuthCard>
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f8f8]">
            <img src={LoginIcon} alt="Sign Up" />
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-black">
            Create an account to continue
          </h1>
          <p className="mt-2 text-sm text-[#0000007A]">
            Create an account to access all the features on this app
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="email" className="font-medium text-black">
              Email or username
            </label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email or username"
            />
          </div>

          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="password" className="font-medium text-black">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col gap-y-1.5">
            <label
              htmlFor="confirm-password"
              className="font-medium text-black"
            >
              Repeat password
            </label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Enter your password again"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer h-12 w-full rounded-lg bg-[#5057ea] font-medium text-white transition hover:bg-[#5057ea]/90"
          >
            Sign Up
          </button>
        </form>
      </AuthCard>
    </div>
  );
};

export default SignUp;
