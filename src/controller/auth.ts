import { Request, Response } from "express";

export default class AuthController {
  static login(req: Request, res: Response) {
    const user = {
      id: "1",
    };

    // Assume valid
    req.session.isAuthenticated = true;
    req.session.userId = user.id;

    return res.json({ success: true });
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
