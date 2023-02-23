import Button from "./Button";

const ListUser = ({ name, list, changeItem }) => {
  return (
    <>
      <h3>{name}</h3>
      {
        list.map((e, i) => {
          return (
              <p key={i}>
                <Button direction='left' changeItem={changeItem} row={i} list={list}/>
                {e}
                <Button direction='right' changeItem={changeItem} row={i} list={list}/>
              </p>
          )
        })
      }
    </>
  )
}

export default ListUser