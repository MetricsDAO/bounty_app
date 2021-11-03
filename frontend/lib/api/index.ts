import { AxiosPromise } from "axios";
import client from "./client";
import { NonceResp, AuthResp, MeResp } from "./types";

//
//
// # Auth
//
//
//
// ## getNonce
//
export function getNonce(
  publicAddress: string | string[]
): AxiosPromise<NonceResp> {
  return client.get(`/users/auth/nonce/${publicAddress}`);
}

// ## authenticateUser
//
export function authenticateUser(
  publicAddress: string | string[],
  signature: string | string[],
  discordHandle?: string | string[]
): AxiosPromise<AuthResp> {
  return client.post(`/users/auth`, {
    public_address: publicAddress,
    discord_handle: discordHandle,
    signature: signature,
  });
}

// ## getMe
//
export function getMe(): AxiosPromise<MeResp> {
  return client.get(`/users/me`);
}
