import { UserState } from "../stores/UserStore";
import mixpanel from "mixpanel-browser";

export const mpRegisterUser = (userStore: UserState) => {
  const u = {
    email: `${userStore.discord_handle}+external-signup@bounty.metricsdao.xyz`,
    user_id: userStore.user_id,
    address: userStore.public_address,
    discord_handle: userStore.discord_handle,
    name: userStore.discord_handle,
    nonce: userStore.nonce,
  };
  mixpanel.identify(userStore.user_id);
  mixpanel.people.set(u);
  mixpanel.register(u);
};
