const PackageBox = ({ items: { package_Title, old_Price, new_Price, image } }) => {
    return (
        <>
            <span className=" bg-[#cd2653] left-0 z-10 text-white font-bold text-[17px] absolute top-0 uppercase p-3">Sale!</span>
            <div className="flex justify-center items-center">
                <img alt="ecommerce" className="object-cover object-center w-full h-[280px] block" src={image} />
            </div>
            <div className="my-4">
                <h2 className="text-[#3b4970] text-lg title-font feature tracking-[0.1px] leading-[19.8px] font-medium">{package_Title}</h2>
                <div className="flex my-1 gap-1 text-sm w-full">
                    <del>${old_Price}</del>
                    <div>${new_Price}</div>
                </div>
            </div>
        </>
    )
}

export default PackageBox
