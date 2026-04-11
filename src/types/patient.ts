export type Patient = {
  id?: string;
  name: string;
  phone: string;
  age: number;
  status: "pending" | "done";
};
