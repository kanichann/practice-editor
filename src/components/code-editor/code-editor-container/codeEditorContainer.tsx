import { setEditorActiveFile } from "store/slices/files/Files";
import selectActiveFiles from "store/selectors/select-active-files/selectActiveFiles";
import CustomTabPanel from "../custtom-tab-panel/CustomTabPanel";
import CustomTabLabel from "../custom-tab-label/CustomTabLabel";
import { useAppDispatch, useAppSelector } from "store/hooks";

const CodeEditorContainer = () => {
  const dispatch = useAppDispatch();
  const activeFiles = useAppSelector(selectActiveFiles);
  const editorActiveFileId = useAppSelector(
    (state) => state.files.editorActiveId
  );

  const onTabClick = (tabPosition: number) => {
    const activeFile = activeFiles[tabPosition];
    if (editorActiveFileId !== activeFile.id) {
      dispatch(setEditorActiveFile(activeFile.id));
    }
  };

  const tabValue = editorActiveFileId
    ? activeFiles.findIndex(
        (activefile) => activefile.id === editorActiveFileId
      )
    : 0;
  if (!activeFiles.length) {
    <div>select a file</div>;
  }
  return (
    <div className="flex-1 h-full overflow-hidden">
      <div className="w-full h-full">
        <div className="flex gap-4">
          {activeFiles.map((activeFile) => {
            const { id } = activeFile;
            const tabNum = activeFiles.indexOf(activeFile);
            const tabActive = tabValue === tabNum;
            return (
              <CustomTabLabel
                key={id}
                activeFile={activeFile}
                activeTab={tabActive}
                tabNumber={tabNum}
                onTabClick={onTabClick}
              />
            );
          })}
        </div>
        <div className="w-full h-full edi">
          {activeFiles.map((activeFile) => {
            const { id } = activeFile;
            return (
              <CustomTabPanel
                key={id}
                activeFile={activeFile}
                editorActiveFile={editorActiveFileId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CodeEditorContainer;
