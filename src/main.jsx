import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { DarkModeProvider } from './utils/DarkModeProvider.jsx'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <Auth0Provider
    domain="dev-sachiiinn.us.auth0.com"
    clientId="yaJxXWgK4vPQTJMaS8YTSm2dZ7SaVkgN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <RouterProvider router={App} />
  </Auth0Provider>
    </DarkModeProvider>
  </React.StrictMode>,
)
