import { MouseEvent } from "react";
import { UserFile } from "types/Files";
import Extensionicon from "../extension-icon/Extensionicon";

import { useAppDispatch } from "store/hooks";
import { closeFile } from "store/thunks/close-file/closeFile";

type CustromTabLabelProps = {
  activeFile: UserFile;
  activeTab: boolean;
  tabNumber: number;
  onTabClick: (tabPosition: number) => void;
};

const CustomTabLabel = (props: CustromTabLabelProps) => {
  const dispatch = useAppDispatch();
  const {
    activeFile: { id, name, extension },
  } = props;
  const onClose = (event: MouseEvent) => {
    event.stopPropagation();
    dispatch(closeFile(id));
  };
  return (
    <div
      className={` flex justify-items-center items-center ${
        props.activeTab && "bg-slate-200"
      }`}
      onClick={() => props.onTabClick(props.tabNumber)}
    >
      <span className=" inline-block w-4 mr-1">
        <Extensionicon extension={extension} />
      </span>
      <span>{name}</span>&nbsp;
      {props.activeTab && <span onClick={onClose}>&#10005;</span>}
    </div>
  );
};

export default CustomTabLabel;
