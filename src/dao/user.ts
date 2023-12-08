import bcrypt from "bcrypt";
import { AuthError } from "../error/auth";
export const users = [
  {
    id: "358f6c96-6aee-4f55-b4a1-7784d3269eef",
    email: "mark@test.com",
    password: bcrypt.hashSync("test", 10),
    firstName: "Mark",
    lastName: "Rivera",
    roles: ["admin"]
  },

  {
    id: "8fc77e40-6b42-4ae1-99e0-e6a89cebee68",
    email: "mel@test.com",
    password: bcrypt.hashSync("test", 10),

    firstName: "Mel",
    lastName: "Rodriguez",
    roles: ["admin"]
  },

  {
    id: "0763f3d2-e23d-4ae4-a9c6-02ffa8e172d2",
    email: "Hugo@test.com",
    password: bcrypt.hashSync("test", 10),
    firstName: "Hugo",
    lastName: "Quispe",
    roles: ["ACCOUNT_MANAGER"]
  }
];

export default class UserDAO {
  static async getUserByEmail(email: string) {
    const user = users.find((user) => user.email === email);

    if (!user) {
      return Promise.reject(new AuthError("Invalid Credentials", 400));
    }
    
    return user;
  }
};