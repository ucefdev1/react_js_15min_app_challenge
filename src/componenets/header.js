import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title, onAdd,showAdd}) => {
  return (
    <header>
        <div className="flex flex-row justify-between text-xl text-white h-24 p-6 m-4 bg-blue-300 items-center font-bold rounded-md ">{title}  <Button onClick = {onAdd} buttonContent={!showAdd ? 'Add' : 'Close'}/></div>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
