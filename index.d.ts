export {};

declare global {
  namespace Express {
    export interface Request {
      session: Request.Session & {
        isAuthenticated: boolean;
        userId: string;
      };
    }
  }
}
