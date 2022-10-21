import { ProductTemplateProps } from "@modules/products/templates"

const ImageGallery: React.FC<ProductTemplateProps> = ({ product }) => {
    return (
        <div className="images-section flex flex-row  mr-[30px]">
            <div className="main-image w-[450px] h-[450px]  bg-slate-600 rounded-md">
                <img src="./Product Image.png"></img>
            </div>
            <div className="image-thumbnails-contianer  flex flex-col">
                <div className="thumbnails m-2 mt-0 w-[140px] h-[140px] bg-slate-800 rounded-md">
                    <img src="./Product Image.png"></img>
                </div>
                <div className="thumbnails m-2 w-[140px] h-[140px] bg-slate-800 rounded-md">
                    <img src="./Product Image.png"></img>
                </div>
                <div className="thumbnails m-2 w-[140px] h-[140px] bg-slate-800 rounded-md">
                    <img src="./Product Image.png"></img>
                </div>
            </div>
        </div>
    )

}

export default ImageGallery
