import Button from "./Button";

const ListUser = ({ name, list, changeItem, listIdx }) => {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        {
          list.map((e, i) => {
            return (
              <div className="row" key={i} style={{marginBottom:'5px'}}>
                <div className="col-3">
                  <Button direction='left' changeItem={changeItem} row={i} list={list} listIdx={listIdx}/>
                </div>
                <div className="col-1"><label>{e}</label></div>
                <div className="col-1">
                  <Button direction='right' changeItem={changeItem} row={i} list={list} listIdx={listIdx}/>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ListUser