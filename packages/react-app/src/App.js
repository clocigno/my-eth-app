import { useQuery } from "@apollo/client";
import { useTokenBalance } from "./hooks/useTokenBalance.ts";
import React, { useEffect } from "react";

import { Body, WalletButton, Container, Header, Image, Link } from "./components";
import logo from "./ethereumLogo.png";

import { addresses  } from "@my-app/contracts";
import GET_TRANSFERS from "./queries/GET_TRANSFERS";


function App() {
  // Read more about useDapp on https://usedapp.io/
  const tokenBalance = useTokenBalance(addresses.ceaErc20, "0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C");
  const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);

  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>
      <Body>
        <Image src={logo} alt="ethereum-logo" />
        <p>
          Edit <code>packages/react-app/src/App.js</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">
          Learn React
        </Link>
        <Link href="https://usedapp.io/">Learn useDapp</Link>
        <Link href="https://thegraph.com/docs/quick-start">Learn The Graph</Link>
      </Body>
    </Container>
  );
}

export default App;
