import { NextFunction, Request, Response } from "express";
import AuthService from "../service/auth";
export default class AuthController {
  static async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    try {
      const user = await AuthService.loginUser(email, password);
      req.session.user = user;
      req.session.isAuthenticated = true;
      
      return res.json({ userId: user.id, userRoles: user.roles }); 
    } catch (error) {
      return next(error);
    }
  }

  static logout(req: Request, res: Response) {
    req.session.destroy((err: Error) => {
      if (err) {
        return res.json({ success: false });
      }

      res.clearCookie("connect.sid");

      return res.json({ success: true });
    });
  }
}
