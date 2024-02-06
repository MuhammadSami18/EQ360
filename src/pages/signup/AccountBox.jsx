const AccountBox = ({ items: { account_Title, account_Info } }) => {
    return (
        <div className="bg-opacity-75 px-4 pt-4 pb-6 border-2 rounded-xl overflow-hidden relative h-[280px] max-lg:h-auto hover:scale-110 transition-transform hover:shadow-xl cursor-pointer">
            <h2 className="text-base tracking-[-0.21px] font-bold text-[#259A75] text-center mb-2">
                {account_Title}
            </h2>
            <p className="text-[#505050] text-sm font-normal tracking-[0.5px]">{account_Info}</p>
        </div>
    )
}

export default AccountBox
