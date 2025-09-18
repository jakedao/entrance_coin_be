export enum EStatus {
  AVAIL = "Available",
  SOLD_OUT = "Sold out",
  PENDING = "Pending",
  RESERVED = "Reserved",
}

export enum EAttribute {
  DARK = "Dark",
  LIGHT = "Light",
  FIRE = "Fire",
  WATER = "Water",
  WIND = "Wind",
}

export interface IMonster {
  name: string;
  attribute: EAttribute;
  awakenName?: string;
}

export interface IItem {
  id: string;
  mons: IMonster[];
  images?: string[];
  createdDate: string;
  status: EStatus;
  contact: string;
}
