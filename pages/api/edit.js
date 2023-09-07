import client from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
    if(req.method==="GET")
        return res.status(404).json('오류발생');

    const db = await client.db('sports');
    const result = await db.collection('soccer').updateOne(
        {"_id" : new ObjectId(req.body.id)},
    )

    if(result.acknowledged)
        res.body('302', '/200/msg')
    else
        res.body('302', '/400/msg')
}