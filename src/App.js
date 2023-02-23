import './App.css'
import {useState} from "react";
import Button from "./components/Button";
import ListUser from "./components/ListUser";

function App() {
  const [l1, setL1] = useState(['j1', 'j2', 'j3'])
  const [l2, setL2] = useState(['p1', 'p2', 'p3'])
  const [l3, setL3] = useState(['g1', 'g2', 'g3'])

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
    <div className='container'>
      <h1>To Do List</h1>
      {/*
        l1.map((e, i) =>
          <p key={i}>
            <Button direction='left' changeItem={changeItem} row={i}/>{e}<Button direction='right' changeItem={changeItem} row={i}/>
            <Button direction='left' changeItem={changeItem} row={i}/>{l2[i]}<Button direction='right' changeItem={changeItem} row={i}/>
            {l3[i]}
          </p>
        )
      */}
      <div className="row">
        <div className="col-md-3">
          <ListUser name={'John'} list={l1} changeItem={changeItem}/>
        </div>
        <div className="col-md-3">
          <ListUser name={'Paul'} list={l2} changeItem={changeItem}/>
        </div>
        <div className="col-md-3">
          {/*<ListUser name={'George'} list={l3} changeItem={changeItem}/>*/}
        </div>
      </div>
    </div>
  )
}

export default App;
