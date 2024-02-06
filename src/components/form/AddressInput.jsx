import React from 'react'

const AddressInput = () => {
    return (
        <>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='Saddress'>Street Address</label>
                <textarea className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" id="Saddress" placeholder="House Number and Street Name" autoComplete='Street Address' required />
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" placeholder="Apartment, Suite, unit, etc. (optional)" />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='town'>Town / City</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" id="town" placeholder="Town / City" autoComplete='City' required />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='zip'>Postal / Zip Code</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" id="zip" placeholder="Enter Zip / Postal Code" autoComplete='Zip Code' required />
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='phone'>Phone Number</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="text" id="phone" placeholder="Enter Phone number" autoComplete='Phone Number' required />
            </div>
        </>
    )
}

export default AddressInput
