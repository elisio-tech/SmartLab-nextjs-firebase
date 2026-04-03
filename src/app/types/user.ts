export type UserRole = "RECEPTIONIST" | "DOCTOR" | "BIOMEDICAL" | "ADMIN";

export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: UserRole;
  isActive?: boolean;
  age: number;
};
