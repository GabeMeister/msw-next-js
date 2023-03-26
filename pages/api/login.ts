import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({
    token: "blahblahblah2",
  });
}
