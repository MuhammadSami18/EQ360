import { Input } from "antd"

const ConformPassword = ({/*setCpass,alert*/}) => {
    return (
        <form>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="conformpassword">Conform Password</label>
                <Input.Password placeholder="Conform Password" id="conformpassword" autoComplete="new-password" required className="inputFiled px-3 py-2" />
            </div>
        </form>
    )
}

export default ConformPassword
