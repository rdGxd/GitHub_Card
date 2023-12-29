import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoGit from "../../assets/GitHubLogo.svg";

export const FormUser = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearchUser = async () => {
    if (!inputRef.current?.value) {
      console.log("Campo Inválido");
      return;
    }

    return navigate(`/username/${inputRef.current.value}`);
  };

  return (
    <form className="flex flex-wrap items-center justify-center p-16">
      <img
        src={LogoGit}
        alt=""
        className="bg-white border rounded-full mb-5"
      />
      <label htmlFor="username" className="">
        Digite o user do GitHub
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="text-center text-black p-1 rounded mt-5"
        required
        placeholder="Username GitHub"
        ref={inputRef}
      />
      <button
        className="ml-5 mt-5 bg-gray-500 rounded p-1"
        onClick={handleSearchUser}
      >
        Pesquisar
      </button>
    </form>
  );
};
