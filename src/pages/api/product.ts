import { getData } from "@/utils/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
  atatusCode: number;
  status: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await getData("products");
  res.status(200).json({ atatusCode: 200, status: true, data });
}
