import { Request, Response } from "express";

export default class DashboardController {
  public static getDashboard(_: Request, res: Response) {
    res.send("Welcome to your Dashboard");
  }
}
