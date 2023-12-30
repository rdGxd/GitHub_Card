import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/getData";
import seguidores from "../../assets/Icons/Seguidores.svg";
import company from "../../assets/Icons/company.svg";
import location from "../../assets/Icons/location.svg";
import logo from "../../assets/Icons/logo.svg";
import repos from "../../assets/Icons/repository.svg";

import { DataProps } from "../../types/data";
import { changeColor } from "../../utils/ChangeColor";

export const DataUser = () => {
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

  const handleChangeBGColor = () => {
    if (refBG.current) {
      changeColor(refBG.current);
    }
  };

  return (
    <>
      <p className="flex flex-wrap justify-center">
        Compartilhe seu #rocketcard
      </p>
      <div className="flex justify-center">
        <div
          className="flex items-center justify-center w-10/12 h-screen bg-white BG rounded-xl "
          ref={refBG}
        >
          {data && (
            <div className="w-10/12 md:text-lg h-[90%] bg-card rounded-xl flex flex-wrap md:items-start items-center justify-center content-center ">
              <header className="HEADER flex ml-4 mt-9 iPhoneSE:mt-56 GalaxyS8:mt-48 md:mt-0 md:ml-0">
                <div className="flex items-center justify-center w-12 h-12 mr-3 border rounded-full">
                  <img src={logo} alt="logo" />
                </div>
                <p className="mt-3">{data.login}</p>
              </header>

              <div className="IMAGE-PROFILE flex md:justify-center mt-20 mr-50 md:mr-0 md:mt-5">
                <img
                  src={data.avatar_url}
                  alt=""
                  className="border-8 rounded-full border-img-profile w-60 md:w-1/2"
                />
              </div>

              <div className="absolute w-1/2 px-3 py-5 text-center INFO bg-gradient-to-b from-black via-gray-500 to-black rounded-xl md:mt-[485px] mt-[400px]">
                <div className="flex SEGUINDO md:items-center md:justify-center md:text-center">
                  <img src={seguidores} alt="" className="mr-1" />
                  <p>{data.followers} Seguidores</p>
                </div>

                <div className="flex SEGUINDO md:items-center md:justify-center md:text-center">
                  <img src={seguidores} alt="" className="mr-1" />
                  <p>{data.following} Seguindo</p>
                </div>

                <div className="Repositórios flex md:items-center md:justify-center md:text-center">
                  <img src={repos} alt="" className="mr-1" />
                  <p>{data.public_repos} Repositórios</p>
                </div>

                <div className="Company flex md:items-center md:justify-center md:text-center">
                  <img src={company} alt="" className="mr-1" />
                  <p>{data.company ? data.company : "Não Possui"}</p>
                </div>

                <div className="Localização flex md:items-center md:justify-center md:text-center">
                  <img src={location} alt="" className="mr-1" />
                  <p>{data.location ? data.location : "Não Possui"}</p>
                </div>
              </div>

              <div className="iPhoneSE:mt-72 iPhoneXR:mt-[450px] iPhone12:mt-96 Pixel7:mt-[452px] GalaxyS8:mt-72 mt-64 md:mt-56">
                <p>Customizar o seu card</p>
                <button
                  className="flex p-2 mt-2 ml-2 bg-gray-500 border border-border-button rounded-xl"
                  onClick={handleChangeBGColor}
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
