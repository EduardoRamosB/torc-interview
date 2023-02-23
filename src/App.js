import './App.css'
import {useState} from "react";
import Button from "./components/Button";

function App() {
  const [l1, setL1] = useState(['j1', 'j2'])
  const [l2, setL2] = useState(['p1', 'p2'])
  const [l3, setL3] = useState(['g1', 'g2'])

  const changeItem = (row, direction, clickList, sideList) => {
    console.log('row:', row, 'direction:', direction)
    const newL1 = [...l1]
    const newL2 = [...l2]

    if(direction === 'right'){
      newL2.splice(row, 0, l1[row])
      newL1.splice(row, 1)
    } else {
      newL1.splice(row, 0, l2[row])
      newL2.splice(row, 1)
    }


    setL2(newL2)
    setL1(newL1)

  }

  return (
    <>
      <h1>To Do List</h1>
      {
        l1.map((e, i) =>
          <p key={i}>
            <Button direction='left' changeItem={changeItem} row={i}/>{e}<Button direction='right' changeItem={changeItem} row={i}/>
            <Button direction='left' changeItem={changeItem} row={i}/>{l2[i]}<Button direction='right' changeItem={changeItem} row={i}/>
            {/*l3[i]*/}
          </p>
        )
      }
    </>
  )
}

export default App;
