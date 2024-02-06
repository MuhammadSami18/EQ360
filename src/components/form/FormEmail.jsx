const FormEmail = ({email,pass,/*mail,password,setMail,setPass*/}) => {
    return (
        <form>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="email" /*value={mail} onChange={(e)=>setMail(e.target.value)}*/ id="email" placeholder="Email" autoComplete="email" required />
                <span className=" text-xs tracking-[-0.21px] leading-[17px]">{email}</span>
            </div>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" type="password" /*value={password} onChange={(e)=>setPass(e.target.value)}*/ id="password" autoComplete="current-password" placeholder="Password" required />
                <span className=" text-xs tracking-[-0.21px] leading-[17px]">{pass}</span>
            </div>
        </form>
    )
}

export default FormEmail
