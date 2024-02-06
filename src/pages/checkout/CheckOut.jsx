import { Link, useParams } from "react-router-dom"
import BackButton from "../../components/buttons/BackButton"
import { useEffect, useRef, useState } from "react"
import { supabase } from "../../db/Db"
import PackData from "./PackData"
import PaypalCheckOut from "./PaypalCheckout"
import CheckOutInput from "./CheckOutInput"

const CheckOut = () => {
    const price=useRef(0)
    const [packages, setPackages] = useState([])
    const params = useParams()
    const { type, id } = params
    const typeMapping = {
        'Business and Business Professionals': 1,
        'School Package': 3,
    };
    const returnID = typeMapping[type] || 2;


    useEffect(() => {
        fetchPackages()
        
    }, [])

    async function fetchPackages() {
        try {
            const { data } = await supabase
            .from('Packages')
            .select('*');
            setPackages(data);
        } catch (error) {
            console.error('Error fetching packages:', error.message);
        }
    }
    
    const CheckPackage = (pack) => {
        return id == pack.id
    }
    const data = packages.filter(CheckPackage)
    const sub_Total = data.length > 0 ? data[0].new_Price : null;
    const discount=sub_Total*0.10;
    const total_Price=sub_Total-discount
    price.current=total_Price
    return (
        <>
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div className="px-4 pt-8">
                    <p className="text-xl font-medium">Package Details</p>
                    <p className="text-gray-400">Check your package and pay with suitable method</p>
                    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        {data.map(item => {
                            return (
                                <div className="flex flex-col rounded-lg bg-white sm:flex-row" key={item.id}>
                                    <PackData items={item} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <p className="text-xl font-medium">User Details</p>
                    <p className="text-gray-400">Complete your order by providing your payment details.</p>
                    <CheckOutInput total_Price={total_Price} sub_Total={sub_Total} discount={discount}/>
                    <PaypalCheckOut value={price.current}/>
                </div>
            </div>
            <div className="flex justify-center items-center mt-20 mb-10"><Link to={`/packages/${type}/${returnID}`}><BackButton /></Link></div>

        </>
    )
}

export default CheckOut
