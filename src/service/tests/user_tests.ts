import { collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BaseService } from "@/service/base/base-service";
import { User } from "@/types/user";

class UserService extends BaseService<User> {
  protected collectionName = "users";
  protected collectionRef = collection(db, "users");
}

export const userService = new UserService();
