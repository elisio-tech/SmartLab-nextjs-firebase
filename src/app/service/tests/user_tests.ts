import { collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { BaseService } from "@/app/service/base/base-service";
import { User } from "@/app/types/user";

class UserService extends BaseService<User> {
  protected collectionName = "users";
  protected collectionRef = collection(db, "users");
}

export const userService = new UserService();
