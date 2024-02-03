import { Helpboxes } from "../Data"
import Button from "../components/Button"

const Help = () => {
  return (
    <>
      <h1 className=' text-center text-4xl feature font-light relative'>Help</h1>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap items-center justify-center -m-4">
          {Helpboxes.map(item => {
            return (
              <>
                <div className="p-6 w-1/3 max-lg:w-full" key={item.id}>
                  <div className="bg-opacity-75 px-4 pt-4 pb-6 border-2 border-[#00000029] rounded-xl overflow-hidden relative h-[292px] max-md:h-auto">
                    <h2 className="relative tracking-widest text-xl text-center title-font font-semibold text-[#259A75] mb-1">
                      {item.title}
                    </h2>
                    <p className=" leading-6 tracking-[0.5px] text-[#5D5D5D] text-[15px] font-normal">{item.info}</p>
                  </div>
                </div >
              </>
            )
          })}
        </div>
      </div>
      <div className="text-center text-base font-normal tracking-[0.5px] leading-[22.4px]">Thank you for choosing EQ360, and we look forward to helping you unlock your full potential!</div>
      <div className="flex max-sm:flex-col justify-center items-center gap-10 mt-10 max-lg:mb-5 lg:mb-[113px]">
        <a href="https://learn2strut.com/contact-us/"><Button value='Contact Us' /></a>
        <a href="https://learn2strut.com/contact-us/"><Button value='Repoet Issue' /></a>
        <a href="https://learn2strut.com/help-us/"><Button value='Support Us' /></a>
      </div>
    </>
  )
}

export default Help
