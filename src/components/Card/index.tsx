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
            <div className="w-10/12 h-[90%] bg-card rounded-xl flex">
              <div className="flex mt-9 ml-8 ">
                <img
                  src={data.avatar_url}
                  alt="Avatar GitHub"
                  className="w-9 h-9 rounded-full mr-5"
                />
                <p className="mt-2">{data.login}</p>
              </div>

              <div className="flex flex-wrap mt-10 content-center ">
                <div className="flex  rounded-full border-8 border-img-profile w-80">
                  <img
                    src={data.avatar_url}
                    alt=""
                    className="rounded-full w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
