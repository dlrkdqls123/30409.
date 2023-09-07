import client from "@/util/database"
import { ObjectId } from "mongodb";

export default function Edit(props) {
    const db = client.db('sports');
    const item = db.collection('soccer').find().toArray();
    return (
        <div>
            <h2>Edit</h2>
            <form action="/api/edit" method="post">
                <div className="detail">
                    <div className="de-item">
                        Name : <input type="text" name="name" defaultValue={item.name} />
                    </div>
                    <div className="de-item">
                        Num : <input type="text" name="num" defaultValue={item.num} />
                    </div>
                    <div className="de-item">
                        Team : <input type="text" name="team" defaultValue={item.team} />
                    </div>
                    <input type="hidden" name="_id" defaultValue={props.params.id}/>
                    <button type="submit">input</button>
                </div>
            </form>
        </div>
    )
  }
  