import { useRef } from "react";
import { ButtonUser } from "..";

export const InputUser = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex flex-wrap justify-center items-center content-center"
      name=""
    >
      <input
        type="text"
        name="username"
        id="username"
        className="text-center text-black p-1 rounded mt-5"
        required
        placeholder="Username GitHub"
        ref={inputRef}
      />
      <ButtonUser inputRef={inputRef} />
    </form>
  );
};
