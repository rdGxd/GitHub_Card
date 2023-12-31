import { changeColor } from "../../../utils/ChangeColor";

type ButtonColor = {
  refDiv: HTMLDivElement;
};

export const ButtonColor = ({ refDiv }: ButtonColor) => {
  const handleChangeBGColor = () => {
    changeColor(refDiv);
  };

  return (
    <div className="iPhoneSE:mt-72 iPhoneXR:mt-[450px] iPhone12:mt-96 Pixel7:mt-[452px] GalaxyS8:mt-72 mt-64 md:mt-14 md:ml-5 lg:mt-0 lg:flex sm:mt-[490px] xl:mt-28 xl:block 2xl:ml-[900px] 2xl:mt-0  2xl:mb-96 2xl:mr-[900px] 2xl:flex 2xl:flex-wrap 2xl:justify-center 2xl:text-center">
      <span className="flex items-center">Customizar o seu card</span>
      <button
        className="p-2 mt-2 ml-2 bg-gray-500 border border-border-button rounded-xl "
        onClick={handleChangeBGColor}
      >
        Gerar background
      </button>
    </div>
  );
};
