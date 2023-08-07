import { SetStateAction } from "react";

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module "*.ttf";

declare module "*.otf";

declare module "locomotive-scroll";

type componentProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<SetStateAction<boolean | any>>;
  isLoaded?: boolean;
};
