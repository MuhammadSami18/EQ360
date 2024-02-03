import { Select } from '../Data'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { Fragment } from 'react'

const Version = () => {
    return (
        <div className=' flex flex-wrap justify-center items-center gap-5 mb-5'>
            <select className="block w-[320px] max-sm:w-full max-sm:mx-2 p-2 border-2 border-gray-800 rounded-md focus:outline-none">
                {Select.map(item=>{
                    const dis = !item.status ? false : true;
                    return(
                        <Fragment key={item.id}>
                            <option value={item.id} disabled={dis}>{item.title}</option>
                        </Fragment>
                    )
                })}
            </select>
            <Link to={'/signin'} ><Button value='Take EQ360'/></Link>
        </div>
    )
}

export default Version
