import client from "@/util/database"
import Link from "next/link";

export default async function List() {
    const db = await client.db('sports');
    const list = await db.collection('soccer').find().toArray();
    return (
        <div>
            <h2>List</h2>
            <div className="list">
                <div>
                    {
                        list.map(e => {
                            return(
                                <div className="li-item">
                                    <Link href={`/detail/${e._id}`}>{e.name}</Link>
                                    <span><Link href={`/edit/${e._id}`}>🔧</Link></span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
  }
  