import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/getData";
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
            <div className="w-10/12 h-[90%] bg-card rounded-xl justify-center content-center flex">
              <img
                src={data.avatar_url}
                alt="Avatar GitHub"
                className="w-9 h-9 rounded-xl mr-5"
              />
              <h1 className="">{data.login}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
