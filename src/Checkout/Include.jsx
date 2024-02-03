const Include = ({ items: { image, name, quantity, price } }) => {
    return (
        <>
            <img className="w-10 h-10" src={image} />
            <div className=" flex items-center gap-2">
                <div>{quantity}</div>
                <div className=" text-[10px] font-bold">x</div>
                <div className="text-[#337ab7]">{name}</div>
            </div>
            <span className="title-font font-normal tracking-[0.5px] text-sm text-black feature">${price}</span>
        </>
    )
}

export default Include
