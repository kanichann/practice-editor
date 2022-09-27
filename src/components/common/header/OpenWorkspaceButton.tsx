import { useRef } from "react";
import InputFile from "../InputFile";
import { useAppDispatch } from "store/hooks";
import { readFiles } from "store/thunks/read-file/readFile";
const OpenWorkspaceButton = () => {
  const directoryInputRef = useRef<any>(null);
  const dispatch = useAppDispatch();
  const onClick = () => {
    directoryInputRef.current.click();
  };
  const onFilesUploaded = async () => {
    try {
      const files = directoryInputRef.current.files;
      await dispatch(readFiles(files));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div onClick={onClick}>OpenWorkspaceButton</div>
      <input
        ref={directoryInputRef}
        type="file"
        onChange={onFilesUploaded}
        /* @ts-expect-error */
        directory=""
        webkitdirectory=""
        hidden
      />
    </>
  );
};

export default OpenWorkspaceButton;
