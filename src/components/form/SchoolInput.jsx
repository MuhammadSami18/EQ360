import { Fragment } from "react"

const SchoolInput = ({ role, roleLable }) => {
    return (
        <>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="schoolemail">School Email</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="email" id="schoolemail" placeholder="School Email" required />
                <span className=" text-xs tracking-[-0.21px] leading-[17px]">Enter school or business manager email for validation otherwise it will default to the Principal.</span>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="number">School Phone</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="number" id="number" placeholder="School Number" required />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor={role}>{roleLable}</label>
                <select className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" id={role}>
                    {role.map(item => {
                        return (
                            <Fragment key={item.id}><option value={item.id}>{item.option}</option></Fragment>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default SchoolInput