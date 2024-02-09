import React, { Fragment } from 'react'

const ChildGrade = () => {
    const grades=['Select Grade','3rd','4th','5th','6th','7th','8th','9th (Freshman year)','10th (Sophmore year)','11th (Junior year)','12th+ (Senior year)','University/College','Graduate School','Post Graduate','Other']
    return (
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="cgrade">Child's Grade</label>
            <select className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" autoComplete="country" id="country">
                {grades.map((item,index) => {
                    return (
                        <Fragment key={index}><option>{item}</option></Fragment>
                    )
                })}
            </select>
        </div>
    )
}

export default ChildGrade
