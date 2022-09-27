import { Link } from "react-router-dom";
import paths from "routes/paths";
import CodeEditorButton from "./CodeEditorButton";
import DarkModeSwitch from "./DarkModeSwitch";
import OpenWorkspaceButton from "./OpenWorkspaceButton";
const Header = () => {
  return (
    <header className="flex justify-between bg-black text-white px-4 py-2 items-center">
      <p className=" text-lg">
        <Link to={paths.home}>Code Editor App</Link>
      </p>
      <div className="flex gap-8 items-center mr-">
        <CodeEditorButton />
        <OpenWorkspaceButton />
      </div>
    </header>
  );
};

export default Header;
