import {useState} from "react"
import ListUser from "./components/ListUser"

function App() {
  const [l1, setL1] = useState(['j1', 'j2', 'j3'])
  const [l2, setL2] = useState(['p1', 'p2', 'p3'])
  const [l3, setL3] = useState(['g1', 'g2', 'g3'])

  const changeItem = (row, direction, clickList, sideList) => {
    let newSideList = []
    const newClickList = [...clickList]

    switch (sideList){
      case 1: newSideList = [...l1];break;
      case 2: newSideList = [...l2];break;
      case 3: newSideList = [...l3];break;
    }

    newSideList.splice(row, 0, clickList[row])
    newClickList.splice(row, 1)

    const currentList = direction === 'right' ?
      sideList - 1 < 1 ? 3 : sideList - 1 :
      sideList + 1 > 3 ? 1 : sideList + 1

    updateLists(currentList, newClickList, newSideList, direction)
  }

  const updateLists = (currentList, newClickList, newSideList, direction) => {
    switch(currentList){
      case 1:
        direction === 'right' ? setL2(newSideList) : setL3(newSideList)
        setL1(newClickList)
        break;
      case 2:
        direction === 'right' ? setL3(newSideList) : setL1(newSideList)
        setL2(newClickList)
        break;
      case 3:
        direction === 'right' ? setL1(newSideList) : setL2(newSideList)
        setL3(newClickList)
        break;
    }
  }

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <div className="row">
        <div className="col-md-3">
          <ListUser name={'John'} list={l1} changeItem={changeItem} listIdx={1}/>
        </div>
        <div className="col-md-3">
          <ListUser name={'Paul'} list={l2} changeItem={changeItem} listIdx={2}/>
        </div>
        <div className="col-md-3">
          <ListUser name={'George'} list={l3} changeItem={changeItem} listIdx={3}/>
        </div>
      </div>
    </div>
  )
}

export default App;
