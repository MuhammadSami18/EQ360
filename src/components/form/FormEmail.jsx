import { Form, Input } from "antd"

const FormEmail = ({ chilemail, chilpas/*mail,password,setMail,setPass*/ }) => {
    let child=''
    chilemail!=null?child="Child's":''
    return (
        <form>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="email">{chilemail} Email</label>
                <Form.Item
                    name={['user', 'email']}
                    rules={[
                        {
                            type: 'email',
                        },
                    ]}
                >
                    <Input placeholder={`${child} Email`} id="email" autoComplete="current-password" required className="inputFiled px-3 py-2"/>
                </Form.Item>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="password">{chilpas} Password</label>
                <Input.Password placeholder={`${child} Password`} id="password" autoComplete="current-password" required className="inputFiled px-3 py-2" />
            </div>
        </form>
    )
}

export default FormEmail
