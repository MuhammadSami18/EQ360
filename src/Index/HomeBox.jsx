import { Tooltip } from "react-tooltip"
import '../index.css'
import { useState } from "react";

const HomeBox = ({ box: { title, info, tooltip } }) => {
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    return (
        <div className="p-6 w-[399px] max-lg:w-full">
            <div className="bg-opacity-75 px-4 pt-4 pb-6 border-2 border-[#00000029] rounded-xl overflow-hidden relative h-[292px] max-md:h-auto">
                <h2 className="relative tracking-widest text-xl title-font font-semibold text-[#259A75] mb-1">
                    {title}
                    <span className=' absolute right-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#259A75] relative border-0 cursor-pointer" data-tooltip-id='tooltip' onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        {isTooltipVisible && (
                        <Tooltip id="tooltip" variant="light" place="bottom" opacity={100} style={{ boxShadow: '0px 8px 11px #aaaaaa', borderRadius: '10px', fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', fontWeight: '400', width: '300px', }}>
                            {tooltip}
                        </Tooltip>)}
                    </span>
                </h2>
                <p className=" leading-6 tracking-[0.5px] text-[#5D5D5D] text-[15px] font-normal">{info}</p>
            </div>
        </div>
    )
}

export default HomeBox