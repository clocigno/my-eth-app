import { Falsy  } from "@usedapp/core/dist/esm/src/model/types";
import { Contract } from "@ethersproject/contracts";
import { useCall, ERC20Interface } from "@usedapp/core";

export function useTokenBalance(
    tokenAddress: string | Falsy,
    address: string | Falsy
  ) {
    const { value, error } =
      useCall(
        address &&
          tokenAddress && {
            contract: new Contract(tokenAddress, ERC20Interface), // instance of called contract
            method: "balanceOf", // Method to be called
            args: [address], // Method arguments - address to be checked for balance
          }
      ) ?? {};
    if(error) {
      console.error(error.message)
      return undefined
    }
    return value?.[0]
}