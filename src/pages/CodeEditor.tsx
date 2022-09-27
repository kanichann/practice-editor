import Layout from "components/common/layout/Layout";
import FileViewer from "components/code-editor/file-viewer/FileViewer";
import CodeEditorContainer from "components/code-editor/code-editor-container/codeEditorContainer";
const CodeEditor = () => {
  return (
    <Layout>
      <div className="absolute top-0 left-0 w-full h-full bottom-0 right-0 bg-slate-400 flex">
        <div className="flex-1 h-full items-center justify-center max-w-[8rem] min-w-[8rem] overflow-x-scroll border-r ">
          <FileViewer />
        </div>
        <div className="w-full">
          <CodeEditorContainer />
        </div>
      </div>
    </Layout>
  );
};

export default CodeEditor;
