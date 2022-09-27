import { ReactComponent as CSSIcon } from "assets/images/css3.svg";
import { ReactComponent as GoIcon } from "assets/images/go.svg";
import { ReactComponent as HtmlIcon } from "assets/images/html5.svg";
import { ReactComponent as JavaIcon } from "assets/images/java.svg";
import { ReactComponent as JavascriptIcon } from "assets/images/javascript.svg";
import { ReactComponent as PHPIcon } from "assets/images/php.svg";
import { ReactComponent as PythonIcon } from "assets/images/python.svg";
import { ReactComponent as RubyIcon } from "assets/images/ruby.svg";
import { ReactComponent as TypescriptIcon } from "assets/images/typescript.svg";
import { ReactComponent as ReactIcon } from "assets/images/react.svg";
import { ReactComponent as DefaultIcon } from "assets/images/blank-file.svg";

type ExtensionIconProps = {
  extension: undefined | string;
};

const Extensionicon = (props: ExtensionIconProps) => {
  switch (props.extension) {
    case "jsx":
    case "tsx":
      return <ReactIcon />;
    case "js":
      return <JavascriptIcon />;
    case "ts":
      return <TypescriptIcon />;
    case "css":
      return <CSSIcon />;
    case "php":
      return <PHPIcon />;
    case "java":
      return <JavaIcon />;
    case "html":
      return <HtmlIcon />;
    case "rb":
      return <RubyIcon />;
    case "go":
      return <GoIcon />;
    case "py":
      return <PythonIcon />;
    default:
      return <DefaultIcon />;
  }
};

export default Extensionicon;
