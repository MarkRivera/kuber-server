import { NextFunction, Request, Response } from "express";
import { AuthError } from "../error/auth";

function authenticate(req: Request, _: Response, next: NextFunction) {
  if (!req.session || !req.session.user) {
    const err = new AuthError("Not Authenticated", 401);

    return next(err);
  }

  next();
}

export default authenticate;
