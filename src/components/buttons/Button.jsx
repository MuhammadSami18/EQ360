const Button = ({value,handleSubmit,disable}) => {
  return (
    <button type="submit" onClick={handleSubmit} className='cursor-pointer rounded-[48.3903px] hover:bg-[#348d71] bg-[#259A75] text-base font-bold px-[26px] py-2 tracking-[1px] leading-[25px] ps-6 pe-6 text-white' disabled={disable}>{value}</button>
  )
}

export default Button
