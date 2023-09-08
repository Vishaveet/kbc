import axios from 'axios';
import Navbar from "./Navbar";
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    axios
    .get("https://gist.githubusercontent.com/Vishaveet/4d6693e1d3eae117287acf4dda8781f3/raw/46e4155a419ffe8f98a1a03f6cd84e0c2ad9619c/kbc%2520questions")
    .then((response) => {
      console.log("res", response);
      // setData(response.data);
      //Hi
    })
    .catch((error) => {
      console.log("error");
    });

  },[])
  return (
     <>
      <div className="container">
        <div className="left-box">
          <Navbar/>
          <img alt="img" className="main-img" src="https://navbharattimes.indiatimes.com/thumb/69341162/kbc-11-69341162.jpg?imgsize=428966&width=1200&height=900&resizemode=75"/>
          <br/>
          <div className="que">
            <h3>What is JAVA ?</h3>
          </div>  
           <div className="opn">
            <form>
              <div className="opns">
              <label>
              <input   name="option" type="radio" value="option1" />
              Option 1
              </label>
              </div>
              <div className="opns">
              <label>
              <input   name="option"  type="radio" value="option2" />
              Option 2
              </label>
              </div>
              <div className="opns">
              <label>
              <input   name="option"  type="radio" value="option3" />
              Option 3
              </label>
              </div>
              <div className="opns">
              <label>
              <input    name="option"  type="radio" value="option4" />
              Option 4
              </label>
              </div>
              <button className="btn">Submit</button>
            </form>
            </div>
        </div>
        <div className="right-box">
          <h3 className="bg">15-&#8377;7 Crore</h3>
          
          <h3>14-&#8377;5 Crore</h3>
          <h3>13-&#8377;3 Crore</h3>
          <h3>12-&#8377;1 Crore</h3>
          <h3>11-&#8377;50 Lakh</h3>
          <h3>10-&#8377;25 Lakh</h3>
          <h3>9-&#8377;12,50,000</h3>
          <h3 className="bg">8-&#8377;6,40,000</h3>
          <h3>7-&#8377;3,20,000</h3>
          <h3>6-&#8377;1,60,000</h3>
          <h3>5-&#8377;80,000</h3>
          <h3 className="bg">4-&#8377;40,000</h3>
          <h3>3-&#8377;20,000</h3>
          <h3>2-&#8377;10,000</h3>
          <h3>1-&#8377;5,000</h3>
        </div>
      </div>
     </>
    );
}

export default App;
