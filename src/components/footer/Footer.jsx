import { Fragment } from "react"
import { FootLink } from "../../db/Data"
import FooterLink from "./FooterLink"

const EQFooter = () => {
    return (
        <footer>
            <div className="px-5 py-3 mx-8 max-md:mx-2 flex items-center sm:flex-row flex-col">
                <p className="text-base tracking-[-0.21px] sm:py-2 sm:mt-0">© 2023 All rights reserved by
                    <a href="https://learn2strut.com/eq360/" className=" ml-1" rel="noopener noreferrer" target="_blank">STRUT Learning  Inc </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-5">

                    {FootLink.map(item => {
                        return(
                            <Fragment key={item.id}><FooterLink item={item}/></Fragment>
                        )
                    })}
                </span>
            </div>
        </footer>
    )
}

export default EQFooter
