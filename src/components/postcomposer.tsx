import { useState } from "react";
import { useSearchParams } from "react-router";
import type { PostData } from "../types/post";
import { useAuth } from "../providers/AuthProvider";

import BoldIcon from "../assets/text-bold.svg";
import EmotionIcon from "../assets/emotion-smile.svg";
import ItalicIcon from "../assets/text-italic.svg";
import MicIcon from "../assets/mic.svg";
import OrderedListIcon from "../assets/text-list-ordered.svg";
import PlusIcon from "../assets/plus.svg";
import QuoteIcon from "../assets/text-quote.svg";
import ScriptIcon from "../assets/script.svg";
import SendIcon from "../assets/send.svg";
import TrashIcon from "../assets/trash.svg";
import UnderlineIcon from "../assets/text-underline.svg";
import UnorderedListIcon from "../assets/text-list-unordered.svg";
import VideoCameraIcon from "../assets/video-camera.svg";

const PostComposer = ({
  setPosts,
  posts,
}: {
  setPosts: React.Dispatch<React.SetStateAction<PostData[]>>;
  posts: PostData[];
}) => {
  const auth = useAuth();
  const [, setSearchParams] = useSearchParams();
  const [content, setContent] = useState("");

  const notImplemented = () => {
    if (!auth.loggedIn) {
      setSearchParams({ modal: "signin" });
      return;
    }
    alert("function not implemented yet");
  };

  const onSubmit = () => {
    if (!auth.loggedIn) {
      setSearchParams({ modal: "signin" });
      return;
    }
    if (!content.trim()) {
      alert("Please enter some content before submitting.");
      return;
    }
    // for randomely selecting a user and avatar from existing posts
    const randomPost = Math.floor(Math.random() * posts.length);

    const newPost: PostData = {
      id: posts.length + 1,
      user: posts[randomPost].user,
      avatar: posts[randomPost].avatar,
      timestamp: Date.now(), // Milliseconds,

      content,
      emoji: posts[randomPost].emoji, // Default emoji, can be changed later
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]);
    setContent(""); // Clear the textarea after submission
  };

  return (
    <div className="rounded-[30px] bg-black/5 p-[7px]">
      <div className="rounded-[18px] border border-black/20 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]">
        {/* Toolbar */}
        <div className="p-2">
          <div className="flex items-center">
            <div className="flex items-center p-2 bg-black/5 rounded-[10px]">
              <select
                className="text-sm text-[#2f384c] bg-transparent border-none outline-none"
                defaultValue="Paragraph"
              >
                <option>Paragraph</option>
              </select>
              <div className="flex items-center gap-1 ml-6">
                {[
                  { icon: BoldIcon, label: "Bold" },
                  { icon: ItalicIcon, label: "Italic" },
                  { icon: UnderlineIcon, label: "Underline" },
                ].map(({ icon, label }, idx) => (
                  <button
                    onClick={notImplemented}
                    key={label}
                    type="button"
                    className={`h-8 w-8 cursor-pointer rounded-[7px] hover:bg-gray-50 ${
                      idx === 0 &&
                      "bg-white shadow-[0_1px_7px_0_rgba(0,0,0,0.09)]"
                    }`}
                    aria-label={label}
                  >
                    <img src={icon} alt={label} className="mx-auto" />
                  </button>
                ))}

                <span className="bg-black/10 h-8 w-px" />

                {[
                  { icon: UnorderedListIcon, label: "Unordered List" },
                  { icon: OrderedListIcon, label: "Ordered List" },
                ].map(({ icon, label }) => (
                  <button
                    onClick={notImplemented}
                    key={label}
                    type="button"
                    className="h-8 w-8 cursor-pointer rounded-[7px] hover:bg-gray-50"
                    aria-label={label}
                  >
                    <img src={icon} alt={label} className="mx-auto" />
                  </button>
                ))}

                <span className="bg-black/10 h-8 w-px" />

                {[
                  { icon: QuoteIcon, label: "Quote" },
                  { icon: ScriptIcon, label: "Code Block" },
                ].map(({ icon, label }) => (
                  <button
                    onClick={notImplemented}
                    key={label}
                    type="button"
                    className="h-8 w-8 cursor-pointer rounded-[7px] hover:bg-gray-50"
                    aria-label={label}
                  >
                    <img src={icon} alt={label} className="mx-auto" />
                  </button>
                ))}
              </div>
            </div>
            <div className="ml-auto">
              <button
                type="button"
                className="h-10 w-10 rounded-[10px] bg-red-100 hover:bg-red-200 cursor-pointer"
                aria-label="Clear"
                onClick={() => setContent("")}
              >
                <img src={TrashIcon} alt="Clear" className="mx-auto" />
              </button>
            </div>
          </div>

          {/* Textarea */}
          <div className="pt-[14px] flex gap-x-2">
            <div className="h-[18px] flex-shrink-0">
              <img src={EmotionIcon} alt="Feeling" className="w-full h-full" />
            </div>
            <textarea
              placeholder="How are you feeling today?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[70px] w-full resize-none outline-none font-medium text-sm leading-snug"
            />
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div className="flex items-center justify-between p-2 border-t border-[#d9d9d9]">
          <div className="flex items-center gap-3">
            {[
              { icon: PlusIcon, label: "Add Attachment" },
              { icon: MicIcon, label: "Voice Input" },
              { icon: VideoCameraIcon, label: "Video Input" },
            ].map(({ icon, label }, idx) => (
              <button
                onClick={notImplemented}
                key={label}
                type="button"
                className={`p-2 rounded-[10px] cursor-pointer hover:bg-black/10 ${
                  idx === 0 ? "bg-black/5" : ""
                }`}
                aria-label={label}
              >
                <img src={icon} alt={label} className="mx-auto" />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="p-2 rounded-[10px] cursor-pointer hover:bg-black/10"
            aria-label="Send"
            onClick={onSubmit}
          >
            <img src={SendIcon} alt="Send" className="mx-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostComposer;
