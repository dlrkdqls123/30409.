export default function New() {
    return (
        <div>
            <h2>New</h2>
            <form action="/api/new" method="post">
                <div className="detail">
                    <div className="de-item">
                        Name : <input type="text" name="name" />
                    </div>
                    <div className="de-item">
                        Num : <input type="text" name="num" />
                    </div>
                    <div className="de-item">
                        Team : <input type="text" name="num" />
                    </div>
                    <button type="submit">input</button>
                </div>
            </form>
        </div>
    )
  }
  