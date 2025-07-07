const Input = ({ ...props }) => {
  return (
    <input
      className={`h-12 p-3 outline-none rounded-lg border-none bg-[#f8f8f8] placeholder:text-[#2f384c]/60 ${props.className}`}
      {...props}
    />
  );
};

export default Input;
