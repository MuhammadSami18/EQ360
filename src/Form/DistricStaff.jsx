import SignInGoogle from "../SignIn/SignInGoogle"
import Button from "../components/Button"
import ConformPassword from "./ConformPassword"
import FormEmail from "./FormEmail"
import FormName from "./FormName"

const DistricStaff = ({ title }) => {
    return (
        <div className="w-full bg-white">
            <h1 className="text-center text-[30px] text-[#595757] font-normal feature tracking-[0.1px] leading-[25px]">Account Type: {title}</h1>
            <div className="w-full max-w-5xl mx-auto bg-white pt-5 rounded-md">
                <div className="mt-4">
                    <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='district'>District</label>
                    <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" id="district" placeholder="District" required />
                </div>
                <FormName />
                <FormEmail email="“Enter a .edu, .org, or .gov School Email; Or Contact Us” [can contact us be a link to the strut contact us page]" pass="" />
                <ConformPassword />
                <div className="flex mt-14 justify-center gap-5">
                    <div><Button value='Register' /></div>
                </div>
                <SignInGoogle />
            </div>
        </div>
    )
}

export default DistricStaff