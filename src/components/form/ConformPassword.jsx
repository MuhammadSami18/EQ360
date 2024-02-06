const ConformPassword = ({/*cpass,setCpass,alert*/}) => {
    return (
        <form>
            <div className="mt-4">
                <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="conformpassword">Conform Password</label>
                <input className="w-full px-3 py-2 border border-[#aaa] rounded-md focus:outline-none focus:ring-2 focus:ring-[#259A75]" /*value={cpass} onChange={(e)=>setCpass(e.target.value)}*/ type="password" id="conformpassword" placeholder="Conform Password" autoComplete="new-password" required />
                {/* <span className=" text-xs tracking-[-0.21px] text-red-500 leading-[17px]">{!cpass?'':!alert?'':alert}</span> */}
            </div>
        </form>
    )
}

export default ConformPassword
