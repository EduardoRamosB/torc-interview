const Button = ({ direction, changeItem, row }) => {
  return (
    <button onClick={() => changeItem(row, direction)} style={{marginRight:'15px'}}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}

export default Button