import client from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    const db = await client.db('sports');
    const detail = await db.collection('soccer').findOne({"_id" : new ObjectId(props.params.id)})
    return (
        <div>
            <h2>Detail</h2>
            <div className="detail">
                <div className="de-item">
                    Name : {detail.name}
                </div>
                <div className="de-item">
                    Num : {detail.num}
                </div>
                <div className="de-item">
                    Team : {detail.team}
                </div>
            </div>
        </div>
    )
  }
  