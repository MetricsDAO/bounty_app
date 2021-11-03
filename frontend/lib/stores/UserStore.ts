import create from "zustand";
import { getMe } from "../api/index";

export interface UserState {
  nonce: number;
  public_address: string;
  discord_handle: string;
  isAuthenticated: boolean;
  hydrateFromServer: () => void;
}

//@ts-ignore
export const useUserStore = create<UserState>((set) => ({
  nonce: null,
  public_address: null,
  discord_handle: null,
  isAuthenticated: false,
  hydrateFromServer: async () => {
    const meResp = await getMe();
    const me = meResp.data;

    return set((state) => {
      return {
        nonce: me.user?.nonce,
        discord_handle: me.user?.discord_handle,
        public_address: me.user?.public_address,
        isAuthenticated: me.user?.public_address ? true : false,
      };
    });
  },
}));
