export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: Color;
  default: boolean;
  description: string;
}

export enum Color {
  F5A351 = "F5A351",
  Fef2C0 = "fef2c0",
  Ffffff = "ffffff",
  The21Dafa = "21DAFA",
  The703D5F = "703D5F",
}
