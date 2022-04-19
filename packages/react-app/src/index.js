import "./index.css";
import { ApolloProvider } from "@apollo/client";
import { DAppProvider } from "@usedapp/core";
import React from "react";
import ReactDOM from "react-dom";
import { providerConfig, client } from "./config";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={providerConfig}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
