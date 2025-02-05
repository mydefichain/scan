import {
  PlaygroundApiClient,
  PlaygroundRpcClient,
} from "@defichain/playground-api-client";
import {
  EnvironmentNetwork,
  newWhaleAPIClient,
  newWhaleRpcClient,
} from "@waveshq/walletkit-core";
import { WhaleApiClient, WhaleRpcClient } from "@defichain/whale-api-client";
import { GetServerSidePropsContext } from "next";
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { WhaleApiClientOptions } from "@defichain/whale-api-client/dist/whale.api.client";
import { getEnvironment } from "./Environment";
import { useNetwork } from "./NetworkContext";

const WhaleApiClientContext = createContext<WhaleApiClient>(undefined as any);
const WhaleRpcClientContext = createContext<WhaleRpcClient>(undefined as any);

/**
 * getWhaleApiClient from GetServerSidePropsContext.
 * @example
 * function getServerSideProps(context: GetServerSidePropsContext) {
 *   const client = getWhaleApiClient(context)
 * }
 *
 * @param {GetServerSidePropsContext} context to read from SSR
 * @return WhaleApiClient created from query string of GetServerSidePropsContext
 */
export function getWhaleApiClient(
  context: GetServerSidePropsContext,
): WhaleApiClient {
  const network =
    context.query.network?.toString() ?? getEnvironment().networks[0];
  return newWhaleClient(newOceanOptions(network as EnvironmentNetwork));
}

export function getWhaleRpcClient(
  context: GetServerSidePropsContext,
): WhaleRpcClient {
  const network =
    context.query.network?.toString() ?? getEnvironment().networks[0];
  return newRpcClient(newOceanOptions(network as EnvironmentNetwork));
}

export function newPlaygroundRpcClient(
  context: GetServerSidePropsContext,
): PlaygroundRpcClient {
  const network =
    context.query.network?.toString() ?? getEnvironment().networks[0];
  return new PlaygroundRpcClient(newPlaygroundClient(network));
}

export function useWhaleApiClient(): WhaleApiClient {
  return useContext(WhaleApiClientContext);
}

export function useWhaleRpcClient(): WhaleRpcClient {
  return useContext(WhaleRpcClientContext);
}

export function WhaleProvider(
  props: PropsWithChildren<any>,
): JSX.Element | null {
  const connection = useNetwork().connection;

  const memo = useMemo(() => {
    const options = newOceanOptions(connection);
    return {
      api: newWhaleClient(options),
      rpc: newRpcClient(options),
    };
  }, [connection]);

  return (
    <WhaleApiClientContext.Provider value={memo.api}>
      <WhaleRpcClientContext.Provider value={memo.rpc}>
        {props.children}
      </WhaleRpcClientContext.Provider>
    </WhaleApiClientContext.Provider>
  );
}
function newWhaleClient(options: WhaleApiClientOptions): WhaleApiClient {
  return newWhaleAPIClient(options);
}

function newRpcClient(options: WhaleApiClientOptions): WhaleRpcClient {
  return newWhaleRpcClient(options);
}

function newOceanOptions(
  network: EnvironmentNetwork,
  url?: string
): WhaleApiClientOptions {
  switch (network) {
    case EnvironmentNetwork.LocalPlayground:
      return {
        url: url ?? "http://localhost:19553",
        network: "regtest",
        version: "v0",
      };
    case EnvironmentNetwork.RemotePlayground:
      return {
        url: url ?? "https://playground.jellyfishsdk.com",
        network: "regtest",
        version: "v0",
      };
    case EnvironmentNetwork.TestNet:
      return {
        url: url ?? "https://testnet-ocean.mydefichain.com:8443",
        network: "testnet",
        version: "v0",
      };
    case EnvironmentNetwork.DevNet:
      return {
        url: url ?? "http://tb01.mydefichain.com:3000",
        network: "testnet",
        version: "v0",
      };
    case EnvironmentNetwork.Changi:
      return {
        url: url ?? "https://changi-ocean.mydefichain.com",
        network: "changi",
        version: "v0",
      };
    case EnvironmentNetwork.MainNet:
    default:
      return {
        url: url ?? "https://ocean.mydefichain.com",
        network: "mainnet",
        version: "v0",
      };
  }
}

// TODO remove this before release to prod
export function newPlaygroundClient(
  network: string | EnvironmentNetwork,
): PlaygroundApiClient {
  switch (network) {
    case EnvironmentNetwork.RemotePlayground:
      return new PlaygroundApiClient({
        url: "https://playground.jellyfishsdk.com",
      });
    case EnvironmentNetwork.LocalPlayground:
      return new PlaygroundApiClient({ url: "http://localhost:19553" });
    default:
      throw new Error(`playground not available for '${network}'`);
  }
}
