import { PropsWithChildren } from "react";

interface CustomaTabWrapProps {
  onchange: () => {};
  tabValue: boolean;
  tabNum: number;
  onTabClick: () => {};
}

const CustomaTabWrap = (props: CustomaTabWrapProps & PropsWithChildren) => {
  return <div>{props.children}</div>;
};

export default CustomaTabWrap;
