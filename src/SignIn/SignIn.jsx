import { Link } from "react-router-dom"
import SignInGoogle from "./SignInGoogle"
import Button from "../components/Button"
import FormEmail from "../Form/FormEmail"
import { Tooltip } from "react-tooltip"
import ForgotPopUp from './ForgotPopUp'

const SignIn = () => {
    return (
        <div className="border-[3px] border-[#aaa] xl:mx-40 lg:mx-10 max-md:mx-5 md:mx-7 rounded-xl">
            <div className="w-full max-w-5xl mx-auto my-10 bg-white p-5 rounded-md">
                <div className="text-center text-[21.2836px] font-normal feature tracking-[0.1px] leading-[25px] relative">
                    Please sign in below or
                    <Link to={'/signup'} className=" text-[#259A75] hover:border-b-2 hover:border-b-[#259A75]"> create an account</Link>
                    <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6 text-[#259A75] relative border-0 cursor-pointer" data-tooltip-id='tooltip'>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <Tooltip id="tooltip" variant="light" place="bottom" opacity={100} style={{ boxShadow: '0px 8px 11px #aaaaaa', borderRadius: '10px', fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', fontWeight: '400', width: '300px', }}>
                            To sign in, simply enter your account
                            information and click the sign in button or use the sign in with Google option. If
                            you're new here, click the create an account link.
                        </Tooltip>
                    </span>
                </div>
                <FormEmail email="We'll never share your email with anyone else."/>
                <Link to={'/dashboard'} className="mt-6 flex justify-center">
                    <Button value='Sign In' />
                </Link>
                <ForgotPopUp />
                <SignInGoogle />
            </div>
        </div>
    )
}

export default SignIn
