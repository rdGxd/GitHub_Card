import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoGit from "../../assets/GitHubLogo.svg";

export const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!inputRef.current?.value) {
      console.log("Campo Inválido");
      return;
    }

    return navigate(`/username/${inputRef.current.value}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-center p-16">
      <img
        src={LogoGit}
        alt=""
        className="w-full h-full bg-white rounded-full mb-5"
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
        onClick={handleClick}
      >
        Pesquisar
      </button>
    </div>
  );
};
