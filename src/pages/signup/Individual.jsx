import Button from '../../components/buttons/Button'
import AdultForm from './AdultForm'
import SignInGoogle from "../signin/SignInGoogle"
// import { useState } from 'react'

const Individual = () => {
    // const [mail,setMail]=useState('')
    // const [password,setPass]=useState('')
    // const [fname,setFname]=useState('')
    // const [lname,setLname]=useState('')
    // const [cpass,setCpass]=useState('')
    // let disable=false

    // if (!mail || !password || !fname || !lname || !cpass) {
    //     disable=true
    // }
    // const handleSubmit=()=>{
    //     alert('User Registered successful')
    // }
    return (
        <div className="w-full  my-10 bg-white p-5 rounded-md">
            <h1 className="text-center text-[30px] text-[#595757] font-normal feature tracking-[0.1px] leading-[25px]">Account Type: Adult/Parent</h1>
            <div className="w-full max-w-5xl mx-auto bg-white pt-5 rounded-md">
                <AdultForm /*mail={mail} password={password} fname={fname} lname={lname} cpass={cpass} setMail={setMail} setPass={setPass} setFname={setFname} setLname={setLname} setCpass={setCpass}*/ />
                <div className="flex mt-14 justify-center gap-5">
                    <Button value='Register' /*handleSubmit={handleSubmit} disable={disable}*/ />
                </div>
                <SignInGoogle />
            </div>
        </div>
    )
}

export default Individual
