import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../db/Db'
import Include from './Include'

const PackData = ({ items: { image, package_Title, package_Info, old_Price, new_Price }}) => {
    const params = useParams()
    const { id } = params
    const [packData, setPackData] = useState([])
    useEffect(() => {
        fetchPackData()
    }, [])

    async function fetchPackData() {
        const { data } = await supabase
            .from('PackData')
            .select('*')
        setPackData(data)
    }

    const CheckPackData = (pack) => {
        return id == pack.package_id
    }

    const data = packData.filter(CheckPackData).slice().sort((a, b) => a.id - b.id)
    return (
        <>
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={image} alt="" />
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{package_Title}</span>
                <div className={`flex gap-2`}>
                    <del className="float-right text-lg text-gray-400">${old_Price}</del>
                    <span className="mt-auto text-lg font-medium">${new_Price}</span>
                </div>
                <span>{package_Info}</span>
                {data.map((item) => {
                    return (
                        <div className=" flex items-center justify-between border-b-2 border-dotted py-2 max-md:flex-col" key={item.id}>
                            <Include items={item}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PackData
