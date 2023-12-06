import React from "react";



const ImagesCollections = () => {
    const imagesList = [...new Array(9)].map((number, index) => `./images/image-${index + 1}.jpg`);
        
    
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
        </ul>
    );
    
};

export default ImagesCollections;

