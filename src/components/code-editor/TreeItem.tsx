import { PropsWithChildren, useState } from "react";

interface TreeItemProp {
  onDoubleClick: () => void;
  label: string;
  nodeId: string;
  key: string;
  endIcon: JSX.Element;
  dirOpen: boolean;
  onclick?: () => void;
}

const TreeItem = (props: TreeItemProp & PropsWithChildren<{}>) => {
  return (
    <dl>
      <dt
        className="whitespace-nowrap"
        onClick={() => {
          props.onclick && props.onclick();
        }}
        onDoubleClick={() => {
          props.onDoubleClick();
        }}
      >
        <span className="w-4 inline-block mr-1">{props.endIcon}</span>
        {props.label}
      </dt>
      {props.dirOpen && <dd>{props.children}</dd>}
    </dl>
  );
};

export default TreeItem;
