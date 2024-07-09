import React from "react"

var Scraper = require('images-scraper');




export default function Generator() {
    const [image, setImage] = React.useState({
        topText: "",
        bottomText: "",
        imageURL: "http://i.imgflip.com/1bij.jpg"
    });

    const [allImagesData, setAllImagesData] = React.useState();

    // // Call to Google for images ---------------------------------------------
    // const google = new Scraper({
    //     puppeteer: {
    //       headless: true,
    //     },
    //   });

    // (async () => {
    // const results = await google.scrape('tony tony chopper', 100);
    // console.log('results', results);
    // })();
    // // Call to Google for images ---------------------------------------------

    // React.useEffect(() => {
    //     setAllImagesData(json["images_results"])
    // }, [])




    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setImage(prevImageData => {
            return {
                ...prevImageData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function getRandomImage() {
        const imagesArray = allImagesData.data.images;
        const randomNum = (Math.floor(Math.random() * imagesArray.length));
        const url = imagesArray[randomNum].url;
        setImage(prevImage => ({
            ...prevImage,
            imageURL: url
        }));
    }




    return (
        <div className="hero">
            <div className="form">
                <input 
                    className="form-input" 
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    value={image.topText} 
                    onChange={handleChange}
                />
                <input 
                    className="form-input" 
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={image.bottomText}
                    onChange={handleChange} 
                />
                <button 
                    className="form-button" 
                    onClick={getRandomImage}>
                    Get a new Chopper image!
                </button>
            </div>

            <div className="image">
                <img src={image.randomImage} className="image--image" />
                <h2 className="image--text top">{image.topText}</h2>
                <h2 className="image--text bottom">{image.bottomText}</h2>
            </div>
            
        </div>
    );
}