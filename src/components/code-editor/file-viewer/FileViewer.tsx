import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import selectTreeView from "store/selectors/select-tree-view/selectTreeView";
import { TreeViewNode } from "types/Files";
import ExtensionIcon from "../extension-icon/Extensionicon";
import { openFile } from "store/thunks/open-file/openFile";
import { toggleDirOpen } from "store/slices/files/Files";
import TreeItem from "../TreeItem";

const FileViewer = () => {
  const FileViewerData = useAppSelector(selectTreeView) as TreeViewNode;
  const treeActiveId = useAppSelector((state) => state.files.viewerActiveId);
  const dispatch = useAppDispatch();

  const onSelectNode = (node: TreeViewNode) => {
    dispatch(openFile(node));
  };
  const renderTree = (node: TreeViewNode) => {
    const { id, name, extension } = node;
    console.log(treeActiveId, FileViewerData, "takotako");
    const dirOpen = node.children && treeActiveId.includes(id) ? true : false;
    const dirOpenHandler = node.children
      ? () => {
          dispatch(toggleDirOpen(id));
        }
      : undefined;
    return (
      <TreeItem
        key={id}
        nodeId={id}
        label={name}
        onDoubleClick={() => onSelectNode(node)}
        endIcon={<ExtensionIcon extension={extension} />}
        dirOpen={dirOpen}
        onclick={dirOpenHandler}
      >
        {Array.isArray(node.children)
          ? node.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    );
  };
  return <div>{renderTree(FileViewerData)}</div>;
};

export default FileViewer;
