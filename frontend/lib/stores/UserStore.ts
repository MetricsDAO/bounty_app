import create from "zustand";
import { getMe } from "../api/index";

export interface UserState {
  user_id: string;
  nonce: number;
  public_address: string;
  discord_handle: string;
  isAuthenticated: boolean;
  hydrateFromServer: () => any;
}

//@ts-ignore
export const useUserStore = create<UserState>((set) => ({
  user_id: null,
  nonce: null,
  public_address: null,
  discord_handle: null,
  isAuthenticated: false,
  hydrateFromServer: async () => {
    const meResp = await getMe();
    const me = meResp.data;

    let nxtState = {
      user_id: me.user?.id,
      nonce: me.user?.nonce,
      discord_handle: me.user?.discord_handle,
      public_address: me.user?.public_address,
      isAuthenticated: me.user?.public_address ? true : false,
    };
    set((state) => nxtState);
    return nxtState;
  },
}));
