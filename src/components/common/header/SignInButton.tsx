import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import paths from "routes/paths";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();
  const onSignIn = () => {
    loginWithRedirect({ appState: { returnTo: paths.codeEditor } });
  };
  return (
    <button
      className=" border border-cyan-500 text-cyan-500 py-2 px-4 "
      onClick={onSignIn}
    >
      SignInButton
    </button>
  );
};

export default SignInButton;
