let Preview = () => {
    <div className="border border-light h-600-800 p-20 bg-secondary">
      <div className="row h-100 w-100 m-0">
        <div className="col-sm-4 border border-light h-100"></div>
        <div className="col-sm-8 border border-light h-100">
          <div className="w-100 row mx-0 my-2 h-40">
            <input
              type="text"
              className="form-control col-sm-9"
              id="customMessage"
              placeholder="Type Custom message Here"
            />
            <input className="btn btn-primary col-sm-2 ml-2 h-40" onClick={addData} defaultValue="Add"></input>
          </div>

          <div className="w-100" style={{ height: "calc(100% - 66px)" }}>
              <h3 className="mt-4">Preview==></h3>
            {data.value.map((value, index) => {
              return <input type="text" key={"item"+index} id={"item"+index} name={"item"+index} className="w-100 my-1 col-sm-9" value={data.value[index]} onChange={(e) => {
                let oldData = JSON.parse(JSON.stringify(data.value))
                oldData[index] = e.target.value
                setData({ value: oldData });
              }}/>;
            })}
          </div>
        </div>
      </div>
    </div>
}
export default Preview;