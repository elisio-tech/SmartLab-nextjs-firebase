import { useEffect, useState } from "react";
import { User } from "@/types/user";
import { userService } from "@/service/tests/user_tests";

export function useUserHooks() {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    async function load() {
      const data = await userService.getAll();
      setUser(data);
    }

    load();
  }, []);

  return { user };
}
