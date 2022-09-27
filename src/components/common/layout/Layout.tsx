import Header from "../header/Header";
import { PropsWithChildren } from "react";
const Layout = (props: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />
      <main className=" relative">{props.children}</main>
      <footer className=" text-white bg-black text-center py-2">
        @kani-editor
      </footer>
    </>
  );
};

export default Layout;
