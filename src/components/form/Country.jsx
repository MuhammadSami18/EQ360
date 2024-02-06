import { Fragment } from "react";
import CountriesList from "../../db/Country";

const Country = () => {
    return (
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="country">Country</label>
            <select className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" autoComplete="country" id="country">
                {CountriesList.map(item => {
                    return (
                        <Fragment key={item.code}><option>{item.option}</option></Fragment>
                    )
                })}
            </select>
        </div>
    )
}

export default Country
