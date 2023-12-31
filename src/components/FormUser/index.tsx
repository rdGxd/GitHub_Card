import { InputUser } from "./Input";
import { LogoGit } from "./Logo";

export const FormUser = () => {
  return (
    <div className="flex flex-wrap items-center justify-center content-center p-16">
      <LogoGit />
      <InputUser />
    </div>
  );
};
