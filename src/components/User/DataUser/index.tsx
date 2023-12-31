import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { ButtonColor } from "../ButtonColor";
import { Dados } from "../Dados";
import { Header } from "../Header";
import { ImageProfile } from "../ImageProfile";
import { getData } from "../../../api/getData";
import { DataProps } from "../../../types/data";

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

  return (
    <>
      <div className="flex justify-center 2xl:w-1/3 2xl:ml-[30%] 2xl:p-5">
        <div
          className="flex items-center justify-center w-10/12 h-screen bg-white BG rounded-xl "
          ref={refBG}
        >
          {data && (
            <div className="w-10/12 md:text-lg h-[90%] bg-card rounded-xl flex flex-wrap md:items-start items-center justify-center content-center 2xl:flex-wrap 2xl:content-normal">
              <Header username={data.login} />
              <ImageProfile src={data.avatar_url} />
              <Dados
                company={data.company}
                followers={data.followers}
                following={data.following}
                location={data.location}
                public_repos={data.public_repos}
              />
              {refBG.current && <ButtonColor refDiv={refBG.current} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
