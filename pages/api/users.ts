// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

type Data = {
  data: Array<User>;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        first_name: "Iormina",
        last_name: "Oakley",
        email: "ioakley0@google.com.au",
        avatar: "https://robohash.org/sitetmagnam.png?size=50x50&set=set1",
      },
    ],
  });
}
