import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/getData";
import seguidores from "../../assets/Icons/Seguidores.svg";
import logo from "../../assets/Icons/logo.svg";
import { DataProps } from "../../types/data";

export const Card = () => {
  const { user } = useParams();
  const [data, setData] = useState<DataProps>();

  useEffect(() => {
    const Data = async () => {
      const r = await getData(user as string);
      setData(r);
    };

    Data();
  }, [user]);

  return (
    <>
      <p className="flex flex-wrap justify-center">
        Compartilhe seu #rocketcard
      </p>
      <div className="flex justify-center">
        <div className="w-10/12 h-screen rounded-xl bg-white flex justify-center items-center ">
          {data && (
            <div className="w-10/12 h-[90%] bg-card rounded-xl flex flex-wrap">
              <header className="HEADER flex mt-9 ml-4">
                <div className="rounded-full mr-3 border w-12 h-12 flex items-center justify-center">
                  <img src={logo} alt="logo" className="" />
                </div>
                <p className="mt-3">{data.login}</p>
              </header>

              <div className="IMAGE-PROFILE flex flex-wrap content-center">
                <div className="flex  rounded-full border-8 border-img-profile ">
                  <img
                    src={data.avatar_url}
                    alt=""
                    className="rounded-full w-96"
                  />
                </div>
              </div>

              <div className="INFO flex flex-wrap bg-gradient-to-t from-slate-300">
                <img src={seguidores} alt="" />
                <p>Seguidores</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
