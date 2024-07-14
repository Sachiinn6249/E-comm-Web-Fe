import ReactDOM from "react-dom/client";
import { DarkModeProvider } from "./utils/DarkModeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

import App from "./App.jsx";
import './index.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
    <RecoilRoot>
    <App />
    </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </DarkModeProvider>
  // </React.StrictMode>,
);
