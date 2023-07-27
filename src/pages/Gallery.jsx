import Image from "../components/Image"

function Gallery(){

    const arr =[10]

    return(
        <main className="p-5 h-full relative overflow-hidden overflow-y-scroll">
            <h1 className="text-2xl leading-none mb-5">Gallery</h1>
            <div className=" w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </div>
        </main>
    )
}

export default Gallery