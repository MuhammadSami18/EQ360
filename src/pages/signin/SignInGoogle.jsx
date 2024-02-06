const SignInGoogle = () => {
    return (
        <div className="mt-5 text-center">
            <div className="text-sm text-gray-600 flex justify-center items-center gap-10 uppercase">
                <hr className="w-full text-[#aaa]" />
                or
                <hr className="w-full text-[#aaa]" />
            </div>
            <div className="mt-6 flex justify-center">
                <button className=' rounded-[48.3903px] hover:shadow-md-up hover:shadow-[#4285f4] border-2 border-[#4285f4] text-base text-[#4285f4] px-[26px] py-3 tracking-[0.21px] leading-[25px] flex gap-2' type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-label="Google" viewBox="0 0 512 512" width="256" height="256" className="w-7 h-7" >
                        <rect width="512" height="512" fill="#ffffff" rx="15%" className="colorfff svgShape" ></rect>
                        <path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z" className="color4285f4 svgShape" ></path>
                        <path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z" className="color34a853 svgShape" ></path>
                        <path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z" className="colorfbbc02 svgShape" ></path>
                        <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z" className="colorea4335 svgShape" ></path>
                    </svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default SignInGoogle
