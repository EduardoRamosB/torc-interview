const Button = ({ direction, changeItem, row, list, listIdx }) => {

  const sideList = direction === 'right' ? (listIdx + 1) > 3 ? 1 : listIdx + 1 :
    (listIdx - 1) < 1 ? 3 : listIdx - 1

  return (
    <button onClick={() => changeItem(row, direction, list, sideList)}
            className="btn btn-primary"
            style={{marginRight:'15px'}}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}

export default Button