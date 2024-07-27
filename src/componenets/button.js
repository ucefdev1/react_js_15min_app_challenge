

const Button = ({buttonContent,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className='btn bg-white text-black hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded'><i className="fa-solid fa-plus "></i> {buttonContent}</button>
    </div>
  )
}

export default Button
