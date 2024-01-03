import seguidores from "../../assets/Icons/Seguidores.svg";
import empresa from "../../assets/Icons/company.svg";
import localizacao from "../../assets/Icons/location.svg";
import repos from "../../assets/Icons/repository.svg";

type DadosProps = {
  followers: number;
  following: number;
  public_repos: number;
  company?: string;
  location: string;
};

export const Dados = ({
  followers,
  following,
  public_repos,
  company,
  location,
}: DadosProps) => {
  return (
    <div className=" absolute lg:static md:static 2xl:relative lg:mt-10 lg:ml-10 w-1/2 px-3 py-5 text-center INFO bg-gradient-to-b from-black via-gray-500 to-black rounded-xl md:mt-0 mt-[400px] lg:mb-10 2xl:mr-10">
      <div className="flex SEGUINDO sm:items-center sm:justify-center sm:text-center">
        <img src={seguidores} alt="" className="mr-1" />
        <p>{followers} Seguidores</p>
      </div>

      <div className="flex SEGUINDO sd:items-center sm:justify-center sm:text-center sm:p-1">
        <img src={seguidores} alt="" className="mr-1" />
        <p>{following} Seguindo</p>
      </div>

      <div className="Repositórios flex sm:items-center sm:justify-center sm:text-center sm:p-1">
        <img src={repos} alt="" className="mr-1" />
        <p>{public_repos} Repositórios</p>
      </div>

      <div className="Company flex sm:items-center sm:justify-center sm:text-center sm:p-1">
        <img src={empresa} alt="" className="mr-1" />
        <p>{company ? company : "Não Possui"}</p>
      </div>

      <div className="Localização flex sm:items-center sm:justify-center sm:text-center sm:p-1">
        <img src={localizacao} alt="" className="mr-1" />
        <p>{location ? location : "Não Possui"}</p>
      </div>
    </div>
  );
};
