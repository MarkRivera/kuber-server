import { AuthError } from "../error/auth";
import UserDAO from "../dao/user";
import bcrypt from "bcrypt";

export default class AuthService {
  static async loginUser(email: string, password: string) {
    if (!email || !password) {
      throw new AuthError("Invalid email or password", 400);
    };

    try {
      const user = await UserDAO.getUserByEmail(email);
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        throw new AuthError("Invalid email or password", 400);
      }

      return { id: user.id, roles: user.roles };

    } catch (error) {
      throw error;
    }
  }
}