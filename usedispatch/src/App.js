import { increment, decrement, inc, dec } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import './App.css'
import pic from './pic03.jpg'
import pic1 from './img/pic04.jpg'

function App() {
  const count = useSelector(state => state.counter1.count);
  const count2 = useSelector(state => state.counter2.count);
  const dispatch = useDispatch();

  return (
    <>
    <div className="main">
      <center>
         <h1 className="heading">Counter App</h1>
      </center>
   
      <div className="boxes">
        <div className="box">
          <img src={pic} alt="" />
        <p>{count} <button onClick={() => { dispatch(increment()) }}><i className="fa fa-heart"></i></button><br/><br/></p>
        
            
   
        </div>

        <div className="box">
        <img src={pic1} alt="" />
        <p>{count2}  <button onClick={() => { dispatch(inc()) }}><i className="fa fa-heart"></i></button><br/><br/></p>
        <div className="btns">
       
        
        </div>
        </div>

      </div>
    </div>
      
    </>
  );
}

export default App;