import { useEffect, useState } from "react";
import { User } from "../types/user";
import {
  getUsers,
  deleteUser,
  updateUser,
  createUser,
  getUserByID,
} from "../service/user-service";

export function useGetUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const data = await getUsers();
      setUsers(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return { users, loading, reload: load };
}

export function useCreateUser(reload?: () => void) {
  async function create(data: Omit<User, "id" | "createdAt">) {
    await createUser(data);

    if (reload) {
      reload();
    }
  }

  return { create };
}

export function useGetUserByID() {
  const [loading, setLoading] = useState(false);

  async function getByID(id: string): Promise<User | null> {
    setLoading(true);
    try {
      const user = await getUserByID(id);
      return user;
    } finally {
      setLoading(false);
    }
  }

  return { getByID, loading };
}

export function useUpdateUser(reload: () => void) {
  async function update(id: string, data: Partial<User>) {
    await updateUser(id, data);
    reload();
  }

  return { update };
}

export function useDeleteUser(reload: () => void) {
  async function remove(id: string) {
    await deleteUser(id);
    reload();
  }

  return { remove };
}
