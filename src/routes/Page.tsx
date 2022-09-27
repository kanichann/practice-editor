import paths from "./paths";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "components/common/loading/Loading";
const Home = React.lazy(() => import("pages/Home"));
const CodeEditor = React.lazy(() => import("pages/CodeEditor"));
const Page = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />

      <Route path={paths.codeEditor} element={<CodeEditor />} />
    </Routes>
  );
};

export default Page;
