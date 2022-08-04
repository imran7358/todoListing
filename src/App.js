
import { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(["Banana", "Apple"])
  const [input, setInput] = useState()
  const Savinput = (e) =>{
    setInput(e.target.value)
  }

  const SaveItem = () =>{
    const copy = [...item]
    copy.push(input)
    setItem(copy)
    setInput("")
  }
  return (
    <div className="App">
     <div className='form-container'>
     <div className='width-100 d-flex  m-t-30'>
    <input type="text" onChange={Savinput}/>
    <button onClick={SaveItem}>Add ToDO</button>
     </div>
     <div className='list-con'><ol>
     {
      item.map((item, key)=>{
        return <li key={key}>{item}</li>
      })
     }
     </ol></div>
     </div>
    </div>
  );
}

export default App;
