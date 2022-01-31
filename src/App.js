import './App.css';
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");

  function subHandle(e) {
    e.preventDefault();
    let liters = bottles * 0.33;
    let grams = liters * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);
    let result = 0;
    
    if(gramsLeft < 0) {
      gramsLeft = 0
    }

    switch (gender) {
      case "male":
        result = (gramsLeft / (weight * 0.7));
        break;
      case "female":
        result = (gramsLeft / (weight * 0.6));
        break;
    }

    document.querySelector("div#alcoResult").textContent = result.toFixed(2);
  }


  return (
    <div className='App'>
      <form onSubmit={subHandle}>
        <div>
          <h1>Alcometer</h1>
        </div>
        <div>
          <label htmlFor="weight">Weight of the consumer (kg) </label>
          <input id="weight" type="number" min={0} value={weight} onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="bottles">Bottles consumed (0.33 l) </label>
          <select name="bottles" id="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div>
          <label htmlFor="time" >Time passed (h) </label>
          <select name="time" id="time" value={time} onChange={e => setTime(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div>
          <label htmlFor="gender">Gender </label>
          <input type="radio" name="gender" id="male" value="male" defaultChecked onChange= {e => setGender(e.target.value)} /> <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" value="female" onChange= {e => setGender(e.target.value)}/> <label htmlFor="female">Female</label>
        </div>
        <div id='alcoResult'>0.00</div>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
