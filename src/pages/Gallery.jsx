import { useEffect , useState} from "react";
import Image from "../components/Image"
import Loading from "./Loading"


function Gallery(){
    const [images, setImages] = useState([]);
    const loadingImages = [
        { src: "https://picsum.photos/500/250" , landscape: true } ,
        { src: "https://picsum.photos/250/500" , landscape: false } ,
        { src: "https://picsum.photos/250/500" , landscape: false } ,
        { src: "https://picsum.photos/500/250" , landscape: true } ,
        { src: "https://picsum.photos/500/250" , landscape: true } ,
        { src: "https://picsum.photos/250/500" , landscape: false } ,
        { src: "https://picsum.photos/250/500" , landscape: false } ,
        { src: "https://picsum.photos/500/250" , landscape: true } ,
        { src: "https://picsum.photos/250/500" , landscape: false } ,
        { src: "https://picsum.photos/500/250" , landscape: true } ,
        { src: "https://picsum.photos/500/250" , landscape: true } ,
        { src: "https://picsum.photos/250/500" , landscape: false } ,
        { src: "https://picsum.photos/250/500" , landscape: false } 
    ];

    useEffect(() => {
        setTimeout(() => {
            setImages(prevImages => [...prevImages, ...loadingImages]);
            console.log("Images have been loaded!")
        }, 5000)
    }, [])

    return(
        images.length ?
        <main className="p-5 h-full relative overflow-hidden overflow-y-scroll">
            <h1 className="text-2xl leading-none mb-5">Gallery</h1>
            <div className=" w-full grid grid-cols-1 gap-5 md:grid-cols-4 lg:grid-cols-8">
               { images.map((img, index) =>  <Image key={index} img={ img } />)}
            </div>
        </main>
        :
        <Loading />
    )
}

export default Gallery