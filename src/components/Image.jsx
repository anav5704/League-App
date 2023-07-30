import "../index.css"

function Image({ img }){

    return(
        <div className={`${ img.landscape ? 'col-span-2' : 'col-span-1 '} prnt rounded-md overflow-hidden relative`}>
            <img src={ img.src } alt="" className=" img w-full h-full object-cover object-center"/>
            <a href={ img.src } download={true} className="dwl opacity-0 cursor-pointer absolute right-0 top-0 w-full h-full grid place-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
            </a>
        </div>
    )
}

export default Image