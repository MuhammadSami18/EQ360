import { useEffect, useState } from "react"
import { supabase } from "../../db/Db"
import PackageBox from './PackageBox'
import { Link } from "react-router-dom"

const Pack = ({ cat: { category_Title, id }, params }) => {
    const [packages,setPackages]=useState([])
    const {title}=params
    useEffect(()=>{
        fetchPackages()
    },[])

    async function fetchPackages() {
        const {data}=await supabase
        .from('Packages')
        .select('*')
        setPackages(data)
    }
    const CheckPackage=(pack)=>{
        return id==pack.category_id
    }
    const pkg=packages.filter(CheckPackage).slice().sort((a, b) => a.id - b.id)
    return (
        <>
            <h1 className="text-center text-3xl font-semibold feature text-[#505050]">{category_Title}</h1>
            <h1 className=" text-lg font-normal mx-[52px] max-md:mx-3 mt-10 mb-5">Showing all {pkg.length} results </h1>
                <div className="max-xl:mx-10  xl:mx-36 max-lg:mx-20 max-md:mx-16 gap-12 flex flex-wrap mb-10">
                    {pkg.map(item => {
                        return (
                            <Link to={`/checkout/${title}/${category_Title}/${item.id}`} className="w-1/5 max-sm:w-full max-md:w-1/3 max-lg:w-1/4 max-lg:h-auto border-2 
                                bg-opacity-75 flex flex-col px-2 pt-2 pb-6 overflow-hidden relative h-[400px] hover:scale-110 
                                transition-transform hover:shadow-xl cursor-pointer"
                                key={item.id}>
                                <PackageBox items={item}/>
                            </Link>
                        )
                    })}
                </div>
        </>
    )

}

export default Pack
