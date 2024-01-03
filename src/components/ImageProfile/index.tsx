type ImageProfileProps = {
  src: string;
};

export const ImageProfile = ({src}: ImageProfileProps) => {
  return (
    <div className="IMAGE-PROFILE  flex md:justify-center mt-20 mr-50 md:mr-0 md:mt-5 lg:items-center lg:mt-20 sm:mt-96 2xl:mt-25 ">
      <img
        src={src}
        alt=""
        className="border-8 rounded-full border-img-profile w-60 md:w-1/2 lg:mt-50  "
      />
    </div>
  );
};
