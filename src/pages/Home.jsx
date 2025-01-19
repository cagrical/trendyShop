import ImageSlider from "../components/ImageSlider"
import ProductList from "../components/ProductList"
import img1 from "../images/rsz_cloth1.png"
import img2 from "../images/rsz_cloth2.png"
import img3 from "../images/rsz_cloth3.png"
import img4 from "../images/rsz_cloth4.png"
import img5 from "../images/rsz_cloth5.png"


function Home() {

    const images = [img1, img2, img3, img4, img5]

    return (
        <div className='home'>
            <ImageSlider images={images} />
            <ProductList />
        </div>
    )
}

export default Home