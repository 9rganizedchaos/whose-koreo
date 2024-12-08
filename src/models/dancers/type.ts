import { Name } from "../common/type";

export type Dancer = {
  id: string;
  name: Name;
  instagramId: string;
};

export type CreateDancerRequest = Omit<Dancer, "id">;
