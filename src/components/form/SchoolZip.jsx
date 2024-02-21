import { Input } from 'antd'
import React from 'react'

const SchoolZip = () => {
    return (
        <div className="mt-4">
            <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='schoolzip'>School's ZipCode</label>
            <Input type='number' placeholder="School's ZipCode" id="schoolzip" required className="inputFiled px-3 py-2" />
        </div>
    )
}

export default SchoolZip
