import React from "react";

import CommentIcon from "../assets/comment.svg";
import HeartIcon from "../assets/heart.svg";
import ShareIcon from "../assets/share.svg";
import { useSearchParams } from "react-router";
import { useAuth } from "../providers/AuthProvider";

interface PostCardProps {
  children: React.ReactNode;
}

const PostCard = ({ children }: PostCardProps) => {
  const auth = useAuth();
  const [, setSearchParams] = useSearchParams();

  // Placeholder function for actions like like, comment, share
  const notImplemented = () => {
    if (!auth.loggedIn) {
      setSearchParams({ modal: "signin" });
      return;
    }
    alert("function not implemented yet");
  };

  return (
    <div className="w-full max-w-[568px] rounded-[30px] bg-black/3 p-[7px]">
      <div className="rounded-[18px] border border-black/10 bg-white p-4 shadow-[0_4px_9px_0_rgba(0,0,0,0.05)]">
        {children}
      </div>
      <div className="flex items-center gap-6 pl-4 mt-3">
        {[
          { icon: HeartIcon, label: "Like" },
          { icon: CommentIcon, label: "Comment" },
          { icon: ShareIcon, label: "Share" },
        ].map(({ icon, label }) => (
          <button
            aria-label={label}
            className="h-8 cursor-pointer hover:opacity-80 transition"
            key={label}
            onClick={notImplemented}
            type="button"
          >
            <img src={icon} alt={label} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
