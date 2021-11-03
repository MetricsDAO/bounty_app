export interface NonceResp {
  nonce: number;
  msg: string;
}

export interface User {
  id: string;
  public_address: string;
  discord_handle: string;
  nonce: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface AuthResp {
  user: User;
  jwt: string;
}

export interface MeResp {
  user: User;
}
