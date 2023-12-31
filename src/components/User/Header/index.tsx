import logo from "../../../assets/Icons/logo.svg";

type HeaderProps = {
  username: string;
};

export const Header = ({ username }: HeaderProps) => {
  return (
    <header className="HEADER flex ml-4 mt-9 iPhoneSE:mt-56 GalaxyS8:mt-48 md:mt-0 md:ml-0 lg:mb-0 sm:mt-0 lg:mt-10">
      <div className="flex items-center justify-center w-12 h-12 mr-3 border rounded-full">
        <img src={logo} alt="logo" />
      </div>
      <p className="mt-3">{username}</p>
    </header>
  );
};
