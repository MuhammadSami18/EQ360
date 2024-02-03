import { useEffect, useState } from "react"
import AccountBox from "../SignUp/AccountBox"
import BackButton from "../components/BackButton"
import { Link, Navigate } from "react-router-dom"
import { supabase } from "../Db"
import Education from "./Education"
import Individual from "./Individual"

const SignUp = () => {
  const [accountType, setAccountType] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    fetchAccountType()
  }, [])

  async function fetchAccountType() {
    const { data } = await supabase
      .from('AccountType')
      .select('*')
    setAccountType(data)
  }


  function HandleClick(item) {
    setData(item)
  }
  
  return (
    <div className="border-[3px] border-[#aaa] xl:mx-40 lg:mx-10 max-md:mx-5 md:mx-7 rounded-xl">
      <div className="w-full  my-10 bg-white p-5 rounded-md">
        {data == 0 && <div className="container px-5 py-10 mx-auto">
          <h1 className="text-center text-[30px] text-[#595757] font-normal feature tracking-[0.1px] leading-[25px]">Select Account Type</h1>
          <div className="container px-5 py-10 mx-auto" >
            <div className="flex flex-wrap items-center -m-4">
              {accountType.map(item => {
                return (
                  <div className="p-6 w-1/4 max-lg:w-full" key={item.id} onClick={() => HandleClick(item)}><AccountBox items={item} /></div>
                )
              })}
            </div>
          </div>
        </div>}
        {data.id == 1 && <Navigate to={`/packages/${data.account_Title}/${data.id}`} />}
        {data.id == 2 && <Navigate to={`/packages/${data.account_Title}/${data.id}`} />}
        {data.id == 3 && <Education />}
        {data.id == 4 && <Individual />}
        <div className="flex mt-5 justify-center">
          {data == 0 && <Link to={'/signin'}><BackButton /></Link>}
          {data != 0 && <div onClick={() => HandleClick(0)}><BackButton /></div>}
        </div>
      </div>
    </div>
  )
}

export default SignUp