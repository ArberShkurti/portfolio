import React from "react";


const ImagesCollections = () => {
    const imagesList = [...new Array(9)].map((number, index) => `../public/images/image-${index + 1}.jpg`);
        
    
    return (
        <ul className="images-collection-container">
            {imagesList.map((imgUrl, index) => {
                    return (
                        <li className="item">
                            <figure>
                                <img src={imgUrl} alt="collection" />
                            </figure>
                        </li>
                        );
                })}
                <div>
                <img src="/images/image-6.jpg" alt="foto" />
                </div>
        </ul>
    );
    
};

export default ImagesCollections;

