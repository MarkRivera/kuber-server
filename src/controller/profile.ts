import { Request, Response } from "express";

export default class ProfileController {
  public static getProfile(_: Request, res: Response) {
    res.send("Hi There 👋");
  }
}
