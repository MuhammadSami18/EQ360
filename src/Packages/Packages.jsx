import { Link, useParams } from "react-router-dom"
import BackButton from "../components/BackButton";
import { Fragment, useEffect, useState } from "react";
import Pack from "./Pack";
// import { Account } from "../Data";
import { supabase } from "../Db";

const Packages = () => {
    const params = useParams()
    const { title, id } = params
    const [subCategory,setSubCategory]=useState([])
    useEffect(()=>{
        fetchSubCategory()
    },[])

    async function fetchSubCategory() {
        const {data}=await supabase
        .from('SubCategory')
        .select('*')
        setSubCategory(data)
    }
    const CheckCategory=(cat)=>{
        if (id==3) {
            return title===cat.category_Title
        }
        return id==cat.accountType_id
    }
    const sub=subCategory.filter(CheckCategory)
    return (
        <>
            <div className=" text-sm mx-[52px] max-md:mx-3 mt-5"> <Link to={'/'} className='text-[#337ab7] hover:underline'>Home</Link> / <Link to={'/signup'} className='text-[#337ab7] hover:underline'>SignUp</Link> / <span>{title}</span></div>
            {sub.map((cat) => {
                return(
                    <Fragment key={cat.id}><Pack cat={cat} params={params}/></Fragment>
                )
            })}
            <Link to={'/signup'} className="flex justify-center items-center mt-20 mb-10"><BackButton /></Link>
        </>
    )
}

export default Packages
