import Button from "./Button";

const ListUser = ({ name, list, changeItem, listIdx }) => {
  return (
    <>
      <h3>{name}</h3>
      {
        list.map((e, i) => {
          return (
              <p key={i}>
                <Button direction='left' changeItem={changeItem} row={i} list={list} listIdx={listIdx}/>
                {e}
                <Button direction='right' changeItem={changeItem} row={i} list={list} listIdx={listIdx}/>
              </p>
          )
        })
      }
    </>
  )
}

export default ListUser