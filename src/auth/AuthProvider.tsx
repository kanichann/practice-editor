import React, { PropsWithChildren } from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import config from 'config';

const AuthProvider = (props:PropsWithChildren<{}>) => {
        const history = useNavigate();
      
        const onRedirectCallback = (appState:AppState|undefined) => {
          history(appState?.returnTo || window.location.pathname,{replace:true});
        };
      
        return (
          <Auth0Provider
            domain={config.auth0Domain}
            clientId={ config.auth0ClientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
          >
            {props.children}
          </Auth0Provider>
        );
      };

export default AuthProvider