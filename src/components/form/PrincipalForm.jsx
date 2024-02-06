import SignInGoogle from "../../pages/signin/SignInGoogle";
import Button from "../buttons/Button";
import EducatorInput from "./EducatorInput";

const roleLable='User Role'
const role=[
    {
        id:1,
        option:'Principal',
    }
]
const PrincipalForm = ({title}) => {
    return (
        <div className="w-full bg-white">
            <h1 className="text-center text-[30px] text-[#595757] font-normal feature tracking-[0.1px] leading-[25px]">Account Type: {title}</h1>
            <div className="w-full max-w-5xl mx-auto bg-white pt-5 rounded-md">
                <EducatorInput role={role} roleLable={roleLable}/>
                <div className="flex mt-14 justify-center gap-5">
                    <div><Button value='Register' /></div>
                </div>
                <SignInGoogle />
            </div>
        </div>
    )
}

export default PrincipalForm