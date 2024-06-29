import { Header } from "../components";
import { Props } from "./types";

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
