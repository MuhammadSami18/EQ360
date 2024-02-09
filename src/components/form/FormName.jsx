import { Input } from 'antd'
import React from 'react'

const FormName = ({/*fname,lname,setFname,setLname*/}) => {
    return (
        <>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='fname'>First Name</label>
                <Input placeholder="First Name" id="fname" required className="inputFiled px-3 py-2"/>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='lname'>Last Name</label>
                <Input placeholder="Last Name" id="lname" required className="inputFiled px-3 py-2"/>
            </div>
        </>

    )
}

export default FormName
