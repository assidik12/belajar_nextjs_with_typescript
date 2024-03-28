import { getData, retriveDataById } from "@/utils/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  data: any;
  atatusCode: number;
  status: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.query.product[1]) {
    const data = await retriveDataById("products", req.query.product[1]);
    res.status(200).json({ atatusCode: 200, status: true, data });
  } else {
    const data = await getData("products");
    res.status(200).json({ atatusCode: 200, status: true, data });
  }
}
