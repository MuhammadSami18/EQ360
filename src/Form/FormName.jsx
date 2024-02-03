import React from 'react'

const FormName = ({/*fname,lname,setFname,setLname*/}) => {
    return (
        <>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='fname'>First Name</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" /*value={fname} onChange={(e)=>setFname(e.target.value)}*/ type="text" id="fname" placeholder="First Name" required />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='lname'>Last Name</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" /*value={lname} onChange={(e)=>setLname(e.target.value)}*/ type="text" id="lname" placeholder="Last Name" required />
            </div>
        </>

    )
}

export default FormName
