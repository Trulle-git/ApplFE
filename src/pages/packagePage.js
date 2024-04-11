import './packagePage.css'
import PropularProduct from '../components/popularProd';
import Talk from '../components/talk';
import { useEffect, useState } from 'react';

export default function PackagePage (){
    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
          window.scrollTo(0, 0);
        };
      }, []); 
    const productImage = ['./images/estImage.png','./images/packageImage.png','./images/packageImage.png','./images/packageImage.png']
    const [mainImage, setMainImage] = useState(productImage[0])
    const [selectedPack, setselectedPack] = useState('one')

    useEffect(()=>{
        switch (selectedPack) {
            case 'one':
                setMainImage(productImage[0])
                break;
            case 'two':
                setMainImage(productImage[1])
                break;
            case 'three':
                setMainImage(productImage[2])
                break;
            case 'four':
                setMainImage(productImage[3])
                break;
            default:
                break;
        }
    },[selectedPack])
    return(
        <>
            <div className='packageWrapper'>
                <div className='packageImageContainer'>
                    <div className='packageMainImage'>
                        <img src={mainImage} alt=''/>
                    </div>
                    <div className='packageImages'>
                        <div className={selectedPack==='one'?'packageImage selectedImage':'packageImage'} onClick={()=>setselectedPack('one')}>
                            <img src={productImage[0]} alt=''/>
                        </div>
                        <div className={selectedPack==='two'?'packageImage selectedImage':'packageImage'} onClick={()=>setselectedPack('two')}>
                            <img src={productImage[1]} alt=''/>
                        </div>
                        <div className={selectedPack==='three'?'packageImage selectedImage':'packageImage'} onClick={()=>setselectedPack('three')}>
                            <img src={productImage[2]} alt=''/>
                        </div>
                        <div className={selectedPack==='four'?'packageImage selectedImage':'packageImage'} onClick={()=>setselectedPack('four')}>
                            <img src={productImage[3]} alt=''/>
                        </div>
                    </div>
                    <div className='packageBtn'>
                        <button>Buy Now</button>
                    </div>
                </div>
                <div className='packageDescContainer'>
                    <div className='packagerow1'>
                        <div className='packageMain1'>
                            <h1>Solar Package</h1>
                            <h2>Rs 2,22,222</h2>
                            <p>Easy EMI Available</p>
                        </div>
                        <div className='packageMain2'>
                            <div className='packageMainRow'>
                                <div className='mainIcon'>
                                    <img src='./images/mainIcon1.svg' alt=''/>
                                </div>
                                <div className='packMainCont'>
                                    <p>Power Generation</p>
                                    <h2>500 W</h2>
                                </div>
                            </div>
                            <div className='packageMainRow'>
                                <div className='mainIcon'>
                                    <img src='./images/mainIcon2.svg' alt=''/>
                                </div>
                                <div className='packMainCont'>
                                    <p>Annual Saving</p>
                                    <h2>Rs 66,666</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='packagerow2'>
                        <h2>Package Includes</h2>
                        <div className='packageInclude'>
                            <div className='package_items'>
                                <div className='package_items_icon'>
                                    <img src='./images/packageIcon1.svg' alt=''/>
                                </div>
                                <p>2 X 100 Ah bty</p>
                            </div>
                            <div className='package_items'>
                                <div className='package_items_icon'>
                                    <img src='./images/packageIcon2.svg' alt=''/>
                                </div>
                                <p>2 X 330W/12V P-Panel</p>
                            </div>
                            <div className='package_items'>
                                <div className='package_items_icon'>
                                    <img src='./images/packageIcon1.svg' alt=''/>
                                </div>
                                <p>2 X 100 Ah bty</p>
                            </div>
                        </div>
                    </div>
                    <div className='packagerow3'>
                        <h1>Features</h1>
                        <p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Cras varius risus quis ante gravida pretium.</li>
                                <li>Pellentesque at turpis a velit imperdiet tempus vel ac lacus.</li>
                                <li>Pellentesque non lectus placerat, aliquam arcu at, imperdiet libero.</li>
                                <li>Donec et est a mi consectetur tincidunt.</li>
                            </ul>
                        </p>
                        <h1>Description</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed rhoncus ante, et dictum lectus. 
                            Duis maximus enim nibh, et elementum neque hendrerit in. Fusce malesuada erat sit amet ultricies venenatis. 
                            Aenean gravida massa libero, sit amet pharetra tellus ornare a. Vivamus sit amet ligula quis odio ornare congue.
                        </p>
                        <h1>Technical Details</h1>
                        <p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Maecenas eu lorem eget magna luctus dapibus.</li>
                                <li>Nam porttitor dui quis cursus ultrices.</li>
                                <li>Proin consequat urna id velit fringilla, tincidunt luctus mauris ultrices.</li>
                                <li>Duis sit amet est sit amet lectus dictum efficitur.</li>
                                <li>Maecenas tristique metus eu mauris lacinia efficitur.</li>
                                <li>Vivamus sed orci at turpis rutrum interdum in laoreet tortor.</li>
                            </ul>
                        </p>
                        <h1>Benifits</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed rhoncus ante, et dictum lectus. 
                            Duis maximus enim nibh, et elementum neque hendrerit in. Fusce malesuada erat sit amet ultricies venenatis. 
                            Aenean gravida massa libero, sit amet pharetra tellus ornare a. Vivamus sit amet ligula quis odio ornare congue.  
                        </p>
                    </div>
                    <div className='packagerow4'>
                        <div className='packagesFact factsOrange'>
                            <h1>Economic  Fact</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Ut ultricies tortor vel aliquam suscipit. 
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className='packagesFact factsGreen'>
                            <h1>Economic  Fact</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Ut ultricies tortor vel aliquam suscipit. 
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='packageWrapper2'>
                <div className='popular-products'>
                    <h1>Popular Product</h1>
                </div>
                <div className='pop-container estPOP'>
                        <PropularProduct/>
                </div>
                <div className='contactUS estTAlk'>
                    <Talk/>
                </div>
            </div>
        </>
    );
} 