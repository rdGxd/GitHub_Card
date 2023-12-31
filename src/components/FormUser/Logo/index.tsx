import logo from "../../../assets/GitHubLogo.svg";

export const LogoGit = () => {
  return (
    <div className="lg:ml-50 lg:flex lg:flex-wrap lg:justify-center lg:p-2">
      <img
        src={logo}
        alt=""
        className="bg-white border rounded-full mb-5 lg:w-1/3"
      />
    </div>
  );
};
