import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/getData";
import seguidores from "../../assets/Icons/Seguidores.svg";
import company from "../../assets/Icons/company.svg";
import location from "../../assets/Icons/location.svg";
import logo from "../../assets/Icons/logo.svg";
import repos from "../../assets/Icons/repository.svg";

import { DataProps } from "../../types/data";

export const Card = () => {
  const { user } = useParams();
  const refBG = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<DataProps>();

  useEffect(() => {
    const Data = async () => {
      const r = await getData(user as string);
      setData(r);
    };

    Data();
  }, [user]);

  const handleClick = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    if (refBG.current) {
      refBG.current.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
  };

  return (
    <>
      <p className="flex flex-wrap justify-center">
        Compartilhe seu #rocketcard
      </p>
      <div className="flex justify-center">
        <div
          className="BG w-10/12 h-screen rounded-xl bg-white flex justify-center items-center "
          ref={refBG}
        >
          {data && (
            <div className="w-10/12 h-[90%] bg-card rounded-xl">
              <header className="HEADER flex mt-9 ml-4">
                <div className="rounded-full mr-3 border w-12 h-12 flex items-center justify-center">
                  <img src={logo} alt="logo" className="" />
                </div>
                <p className="mt-3">{data.login}</p>
              </header>

              <div className="IMAGE-PROFILE">
                <div className="rounded-full border-8 border-img-profile ml-20 mt-20">
                  <img src={data.avatar_url} alt="" className="rounded-full" />
                </div>
              </div>

              <div className="INFO absolute bg-gradient-to-b from-black via-gray-500 to-black ml-5 py-5 px-3 rounded-xl">
                <div className="SEGUINDO flex">
                  <img src={seguidores} alt="" className="mr-1" />
                  <p>{data.followers} Seguidores</p>
                </div>
                <div className="SEGUINDO flex">
                  <img src={seguidores} alt="" className="mr-1" />
                  <p>{data.following} Seguindo</p>
                </div>
                <div className="Repositórios flex">
                  <img src={repos} alt="" className="mr-1" />
                  <p>{data.public_repos} Repositórios</p>
                </div>
                <div className="Company flex">
                  <img src={company} alt="" className="mr-1" />
                  <p>{data.company ? data.company : "Não Possui"}</p>
                </div>
                <div className="Localização flex">
                  <img src={location} alt="" className="mr-1" />
                  <p>{data.location ? data.location : "Não Possui"}</p>
                </div>
              </div>

              <div className="mt-56 ml-24">
                <p>Customizar o seu card</p>
                <button
                  className="border border-border-button bg-gray-500 rounded-xl flex p-2 ml-2"
                  onClick={handleClick}
                >
                  Gerar background
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
