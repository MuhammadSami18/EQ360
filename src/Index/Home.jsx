import Version from '../Index/Version'
import { IndexBox, LinkData } from '../Data'
import { Tooltip } from 'react-tooltip'
import { Fragment, useState } from 'react'
import HomeBox from './HomeBox'

const Home = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <>
      {/* hero start */}
      <section className=" body-font">
        <h1 className=' text-center text-4xl feature font-light relative'>Welcome to EQ360
          <span className="absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6 text-[#259A75] relative border-0 cursor-pointer" data-tooltip-id='tooltip' onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            {isTooltipVisible && (
              <Tooltip id="tooltip" variant="light" place="bottom" opacity={100} style={{ boxShadow: '0px 8px 11px #aaaaaa', borderRadius: '10px', fontSize: '14px', lineHeight: '20px', letterSpacing: '0px', fontWeight: '400', width: '300px', zIndex: '10' }}>
                To learn more about EQ, assessments, or activities, click on the resource links. To take the EQ360 assessment, choose the assessment type and click the take EQ360 button.
              </Tooltip>)}
          </span>
        </h1>
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap items-center justify-center -m-4">
            {IndexBox.map(box => {
              return (
                <Fragment key={box.id}><HomeBox box={box} /></Fragment>
              )
            })}
          </div>
        </div>
      </section>
      {/* hero end */}

      {/* note start */}
      <>
        <div className="bg-[#259A75] lg:mx-28 max-lg:mx-4 text-white border-l-4 border-green-500 p-2 rounded-md mb-4 flex max-lg:flex-wrap items-center">
          <strong className="font-bold text-base w-36">Please note:</strong>
          <span className="text-sm"> While this may work on smartphones, it is optimized for laptops, desktops, and Chromebooks/tablets. Let’s get started on the path to making the world a more friendly, agreeable, and confident place!</span>
        </div>
        <div className='mb-5 flex flex-wrap max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-0 justify-center items-center'>
          {LinkData.map(link => {
            return (
              <a key={link.id} href={`${link.link}`} className='text-[#3b4970] cursor-pointer text-[15px] leading-[10px] tracking-[0.21px] hover:text-[#259A75] font-medium p-4'>
                {link.title}
              </a>
            )
          })}
        </div>
      </>
      {/* note end */}

      <Version />
    </>
  )
}

export default Home
