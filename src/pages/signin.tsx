import React, { useEffect } from "react";
import AuthCard from "../components/authcard";
import LoginIcon from "../assets/login.svg";
import Input from "../components/ui/input";
import { useNavigate } from "react-router";
import LoaderIcon from "../assets/loader.svg";
import { useAuth } from "../providers/AuthProvider";

const SignIn = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    auth.initLogin({ email, password });
  };

  useEffect(() => {
    if (auth.loggedIn) {
      navigate("/home");
    }
  }, [auth.loggedIn, navigate]);

  return (
    <div className="flex h-full items-center justify-center">
      <AuthCard>
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f8f8f8]">
            <img src={LoginIcon} alt="Login" />
          </div>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-black">
            Sign in to continue
          </h1>
          <p className="mt-2 text-sm text-[#0000007A]">
            Sign in to access all the features on this app
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="email" className="font-medium text-black">
              Email or username
            </label>

            <Input
              id="email"
              name="email"
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
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center cursor-pointer h-12 w-full rounded-lg bg-[#5057ea] font-medium text-white transition hover:bg-[#5057ea]/90"
          >
            {auth.isAuthenticating ? (
              <img
                alt="Loading..."
                className="animate-spin h-5 w-5"
                src={LoaderIcon}
              />
            ) : (
              <span>Sign In</span>
            )}
          </button>
        </form>
      </AuthCard>
    </div>
  );
};

export default SignIn;
