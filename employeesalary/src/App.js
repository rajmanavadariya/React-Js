import logo from './logo.svg';
import './App.css';
import Salary from './Salary';

function App() {

  let data =[{
    id : 10,
    name : "Ayan sangani",
    position : "web developer",
    salary : 40000
  },{

    id : 8,
    name : "vk dobariya",
    position : "Business Exclusive",
    salary : 25000

  },{

    id : 6,
    name : "sn kansagara",
    position : "Manager",
    salary : 100000

  },{

    id : 2,
    name : "vn shah",
    position : "H.R",
    salary : 23500

  },{

    id : 3,
    name : "pr Rupala",
    position : "Product Manager",
    salary : 21000

  },{

    id : 74,
    name : "sun kamani",
    position : "Business Exclusive",
    salary : 27000

  },{

    id : 8,
    name : "vk dobariya",
    position : "Peon",
    salary : 25000

  },{

    id : 44,
    name : "Sarthi Kasundra",
    position : "Branch Manager",
    salary : 200000

  },{

    id : 80,
    name : "rj ropaliya",
    position : "H.R",
    salary : 50000

  }
  ]

  return (
    <div className="App">
       <Salary Salary = {data}/>
    </div>
  );
}

export default App;
