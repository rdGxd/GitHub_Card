import { RefObject } from "react";
import { useNavigate } from "react-router-dom";

type ButtonUser = {
  inputRef: RefObject<HTMLInputElement>;
};

export const ButtonUser = ({ inputRef }: ButtonUser) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!inputRef.current?.value) {
      console.log("Campo Inválido");
      return;
    }

    return navigate(`/user/${inputRef.current.value}`);
  };

  return (
    <button
      type="submit"
      className="ml-5 mt-5 bg-gray-500 rounded p-1"
      onClick={handleClick}
    >
      Pesquisar
    </button>
  );
};
