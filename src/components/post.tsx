import type { PostData } from "../types/post";
import { formatTimeAgo } from "../utils/functions";
import PostCard from "./postcard";

const Post = ({ avatar, content, emoji, timestamp, user }: PostData) => (
  <PostCard>
    <div className="flex flex-col">
      <div className="flex gap-x-2.5">
        {avatar && (
          <div className="w-10 h-10 rounded-md overflow-hidden">
            <img
              src={avatar}
              alt={user}
              className="w-full h-full object-cover rounded-[7px]"
            />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-[13px] leading-none text-black">
            {user}
          </span>
          <span className="font-medium text-[12px] leading-none text-black/40">
            {formatTimeAgo(timestamp)}
          </span>
        </div>
      </div>

      <div className="flex mt-3 gap-x-5">
        {emoji && (
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#F2F2F2] text-xl flex-shrink-0">
            {emoji}
          </div>
        )}
        <p className="text-black/85 font-medium text-[14px] leading-[21px]">
          {content}
        </p>
      </div>
    </div>
  </PostCard>
);

export default Post;
