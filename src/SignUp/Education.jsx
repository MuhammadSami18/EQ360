import { useEffect, useState } from "react";
import EducatorForm from "../Form/EducatorForm";
import PrincipalForm from "../Form/PrincipalForm";
import DistricStaff from "../Form/DistricStaff";
import { Navigate } from "react-router-dom";
import { supabase } from "../Db";
import EducationBox from "./EducationBox";

const Education = () => {
  const [id, setId] = useState(0)
  const [subCategory, setSubCategory] = useState([])

  useEffect(() => {
    fetchSubCategory()
  })

  function handleClick(data) {
    setId(data)
  }

  async function fetchSubCategory() {
    const { data } = await supabase
      .from('SubCategory')
      .select('*')
    setSubCategory(data)
  }

  const CheckCategory = (cat) => {
    return 3 == cat.accountType_id
  }
  const sub = subCategory.filter(CheckCategory)
  return (
    <div className="container px-5 py-10 mx-auto">
      {id == 0 && <><h1 className="text-center text-[30px] text-[#595757] font-normal feature tracking-[0.1px] leading-[25px]">Educational Institutions and Educators</h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap items-center -m-4">
            {sub.map(item => {
              return (
                <div className="p-6 w-1/4 max-lg:w-full" key={item.id} onClick={() => handleClick(item.id)}><EducationBox items={item} /></div>
              )
            })}
          </div>
        </div></>}
      {id == 5 && <EducatorForm title={sub[0].category_Title} />}
      {id == 6 && <PrincipalForm title={sub[1].category_Title} />}
      {id == 7 && <DistricStaff title={sub[2].category_Title} />}
      {id == 8 && <Navigate to={`/packages/${sub[3].category_Title}/${3}`} />}
    </div>
  )
}

export default Education
