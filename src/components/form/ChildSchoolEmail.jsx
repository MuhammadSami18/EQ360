import { Form, Input } from 'antd'
import React from 'react'

const ChildSchoolEmail = () => {
    return (
        <>

            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="child school email">Child's School Email</label>
                <Form.Item
                    name={['user', 'email']}
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input placeholder="Child's School Email" id="child school email" autoComplete="current-email" required className="inputFiled px-3 py-2" />
                </Form.Item>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor='schoolzip'>Child's Class Code</label>
                <Input type='number' placeholder="Child's Class Code" id="schoolzip" required className="inputFiled px-3 py-2" />
            </div>
        </>
    )
}

export default ChildSchoolEmail
