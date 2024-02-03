import { useNavigate } from "react-router-dom"
import BackButton from "../components/BackButton"
import Button from "../components/Button"
import AddressInput from "./AddressInput"
import Country from "./Country"
import FormName from "./FormName"

const UserDetail = () => {
    const navigate = useNavigate()
    return (
        <div className="border-[3px] border-[#aaa] xl:mx-40 lg:mx-10 max-md:mx-5 md:mx-7 rounded-xl">
            <div className="w-full  my-10 bg-white p-5 rounded-md">
                <div className="w-full  my-10 bg-white p-5 rounded-md">
                    <h1 className="text-center text-[30px] text-[#595757] font-normal feature tracking-[0.1px] leading-[25px]">User Details</h1>
                    <div className="w-full max-w-5xl mx-auto bg-white pt-5 rounded-md">
                        <FormName />
                        {/* company name input start */}
                        <>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="company">Company Name</label>
                                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" id="company" placeholder="Company Name (Optional)" autoComplete="company" />
                            </div>
                        </>
                        {/* company name input end */}
                        <Country />
                        <AddressInput />
                    </div>
                    <div className=" flex mt-14 gap-10 justify-center">
                        <div onClick={() => navigate(-1)}><BackButton /></div>
                        <Button value='Register' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail