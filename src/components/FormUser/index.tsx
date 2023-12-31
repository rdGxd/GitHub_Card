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

    return navigate(`/user/${inputRef.current.value}`);
  };

  return (
    <form className="flex flex-wrap items-center justify-center content-center p-16">
      <div className="lg:ml-50 lg:flex lg:flex-wrap lg:justify-center lg:p-2">
        <img
          src={LogoGit}
          alt=""
          className="bg-white border rounded-full mb-5 lg:w-1/3"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center content-center">
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
      </div>
    </form>
  );
};
