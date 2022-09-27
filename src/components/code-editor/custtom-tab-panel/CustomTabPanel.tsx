import { UserFile } from "types/Files";
import CustomEdiror from "../custom-editor/CustomEdiror";

type CustomTabProps = {
  activeFile: UserFile;
  editorActiveFile: string | null;
};

const CustomTabPanel = (props: CustomTabProps) => {
  const { activeFile, editorActiveFile } = props;
  return (
    <div hidden={editorActiveFile !== activeFile.id} className="h-full">
      <CustomEdiror activeFile={activeFile} />
    </div>
  );
};

export default CustomTabPanel;
