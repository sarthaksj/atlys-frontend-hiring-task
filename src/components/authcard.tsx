import React from "react";
import { Link, useLocation } from "react-router";

type AuthCardProps = {
  children: React.ReactNode;
};

const AuthCard = ({ children }: AuthCardProps) => {
  const { pathname, search } = useLocation();
  const isSignIn = pathname === "/signin" || search.includes("modal=signin");

  return (
    <div className="w-full max-w-[498px] rounded-[30px] bg-[#ebebeb] p-[11px]">
      <div className="rounded-[21px] bg-white p-8 shadow-sm">{children}</div>

      <div className="mt-4 text-center text-sm text-[#00000099]">
        {isSignIn ? (
          <>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#5057ea] hover:underline"
            >
              Sign Up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-medium text-[#5057ea] hover:underline"
            >
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthCard;
