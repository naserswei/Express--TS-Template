import { Request, Response } from "express";

export const controllerTest = (req: Request, res: Response) => {
  res.json({
    test: "this is a test from the controller",
  });
};
