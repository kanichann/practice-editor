import { useAuth0 } from "@auth0/auth0-react";

const SignOutButton = () => {
  const { logout } = useAuth0();
  const onSignOut = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <button
      className=" py-2 px-4 border border-cyan-500 text-cyan-500"
      onClick={onSignOut}
    >
      SignInButton
    </button>
  );
};

export default SignOutButton;
