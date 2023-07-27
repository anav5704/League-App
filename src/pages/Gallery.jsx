import Image from "../components/Image"

function Gallery(){

    const arr =[10]

    return(
        <main className="p-5 h-full relative overflow-hidden overflow-y-scroll">
            <h1 className="text-2xl leading-none mb-5">Gallery</h1>
            <div className="grid grid-cols-4 gap-5">
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