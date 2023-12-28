import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const InputUser = () => {
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
    <div className="flex flex-wrap">
      <label htmlFor="username" className="mr-2">
        Digite o user do GitHub
      </label>
      <input
        type="text"
        name="username"
        id="username"
        className="text-black"
        required
        placeholder="Username GitHub"
        ref={inputRef}
      />
      <button className="bg-gray-500 rounded" onClick={handleClick}>
        Pesquisar
      </button>
    </div>
  );
};
