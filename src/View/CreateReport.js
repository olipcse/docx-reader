import React,{useState} from "react";
import Header from "./Header";
import "../Style/CommonStyle.css";
// let existingData = ["ahgds sa", "fdasf sa", "asd sad ahgds sa","saujhgda"];

let CreateReport = () => {
   let personList={value:["Olip","Tusar","Arif","Saidur","Mosarrof","Kawsar","Faiad","BokuVai","Okyaku","Imanishi"]}
    var predefinedData =  ["aaa","bbb","ccc","ddd","eee","fff","ggg","hhh"]
    const [data, setData] = useState({value:predefinedData});
    const [dataTobeInserted, setDataTobeInserted] = useState("");
    let addData = () => {
      console.log("addCalled")
      let oldData = JSON.parse(JSON.stringify(data.value))
      oldData.push(dataTobeInserted)
      setData({ value : oldData})
    }
    let removeData = (index) => {
      let oldData = JSON.parse(JSON.stringify(data.value))
      oldData.splice(index, 1);
      setData({ value : oldData})
    }
    return (
      <>
      {console.log(data)}
        <Header />
        <div className="border border-light h-600-800 p-20 bg-secondary">
          <div className="row h-100 w-100 m-0">
            <div className="col-sm-4 border border-light h-100">
              <div class="form-group">
                <label for="uname font-weight-bold">Amount of Files To Be Genarated:</label>
                <input type="number" class="form-control input-sm" id="uname" placeholder="Enter number" name="uname" min="1" max="99" required/>
                <div class="invalid-feedback">Please fill out this field (1-99).</div>
              </div>
              <div class="form-group">
                <label for="uname font-weight-bold">Current Project:</label>
                <select class="form-control input-sm" id="project">
                  <option>E-Doctor</option>
                  <option>MRT System</option>
                  <option>E-Regi</option>
                  <option>Doctors Manga</option>
                  <option>FileMaker</option>
                  <option>E-Dentist</option>
                  <option>Reservation System</option>
                  <option>Checksheet</option>
                  <option>CDIFF</option>
                </select>
              </div>
              <div class="form-group">
                <label for="uname font-weight-bold">Working Phase:</label>
                <select class="form-control" id="phase">
                  <option>Analysis</option>
                  <option>Development</option>
                  <option>Update</option>
                  <option>Bug Fix</option>
                  <option>Test</option>
                  <option>E-Dentist</option>
                  <option>Preparation</option>
                  <option>Environment Setup</option>
                  <option>Schedule creation</option>
                </select>
              </div>
              <div class="form-group">
                <label for="uname font-weight-bold">Working Area:</label>
                <select class="form-control" id="phase">
                  <option>Full Stack</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Database</option>
                  <option>Design</option>
                  <option>Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="uname font-weight-bold">Meeting With:</label>
                <div className="row p-0 m-0">
                  <div className="col-sm-6 p-0">
                  {
                    personList.value.slice(0,personList.value.length%2===0?(personList.value.length/2):(personList.value.length/2)+1).map((v, index) => {
                      return(
                        <div class="form-check">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value={v}/>{v}
                          </label>
                        </div>  
                      )          
                    })}
                  </div>
                  <div className="col-sm-6 p-0">
                  {
                    personList.value.slice(personList.value.length%2===0?(personList.value.length/2):(personList.value.length/2)+1,personList.value.length).map((v, index) => {
                      return(
                        <div class="form-check">
                          <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" value={v}/>{v}
                          </label>
                        </div>  
                      )          
                    })}
                  </div>
                  
                </div>
                
                
                <select class="form-control" id="phase">
                  <option>Full Stack</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>Database</option>
                  <option>Design</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="col-sm-8 border border-light h-100">
              <div className="w-100 row mx-0 my-2 h-40">
                <input
                  type="text"
                  className="form-control col-sm-9"
                  id="customMessage"
                  placeholder="Type Custom message Here"
                  onChange={(e) => {
                    setDataTobeInserted(e.target.value)
                  }}
                />
                <input type="button" className="btn btn-primary col-sm-2 ml-2 h-40" onClick={()=>addData()} defaultValue="Add"></input>
              </div>

              <div className="w-100 overflow-y-auto" style={{ height: "calc(100% - 66px)" }}>
                  <h3 className="mt-4">Preview</h3>
                {data.value.map((value, index) => {
                  return(
                  <div key={"item"+index} className="w-100 my-1 col-sm-12" >
                    <input type="text" id={"item"+index} name={"item"+index}
                      className="form-control w-100 col-sm-9"
                      style={{display:"inline",height:"auto"}} 
                      value={data.value[index]} onChange={(e) => {
                      let oldData = JSON.parse(JSON.stringify(data.value))
                      oldData[index] = e.target.value
                      setData({ value: oldData });
                    }}/>
                    <input type="button" className="btn btn-danger col-sm-1 ml-2 h-40 p-0" onClick={()=>removeData(index)} defaultValue="X"></input>
                  </div>
                  );
                })}
                <input type="button" className="btn btn-success offset-sm-4 col-sm-4 h-40 p-0 mt-4" onClick={()=>{}} defaultValue="Download"></input>
              </div>
            </div>
          </div>
        </div>
        {/* <marquee className="border border-light p-20 bg-warning">Developed By: Olip</marquee> */}
      </>
    );
};
export default CreateReport;
