const Button = ({ direction, changeItem, row, list }) => {
  return (
    <button onClick={() => changeItem(row, direction, list)} style={{marginRight:'15px'}}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}

export default Button