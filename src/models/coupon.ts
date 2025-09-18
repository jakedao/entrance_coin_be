export type TReward = {
  manaStone?: number;
  crystals?: number;
  attributeScrolls?: number;
  mysticScrolls?: number;
  legendaryScrolls?: number;
  summonStones?: number;
  energies?: number;
};

export enum EStatus {
  Active = "active",
  Expired = "expired",
  Used = "used",
}

export enum EServer {
  ASIA = "asia",
  GLOBAL = "global",
  EUROPE = "europe",
  KOREA = "korea",
  CHINA = "china",
  JAPAN = "japan",
}

export interface ICoupon {
  id: string;
  code: string;
  rewards: TReward;
  status: EStatus;
  expiry: string; // ISO date string
}
