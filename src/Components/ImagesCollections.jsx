import React from "react";


const ImagesCollections=()=>{
    const imagesList = [...new Array(9)].map(
        (number, index) => `./images/image-${index + 1}.jpg`);
        
    
    return (
        <ul className="images-collection-container">
            {imagesList.map((imgUrl, index) => {
                    return (
                        <li className="item">
                            <image>
                                <img src={imgUrl} alt="collection" />
                            </image>
                        </li>
                        );
                })}
                <div>
                <img src="/images/image-7.jpg" alt="foto" />
                </div>
        </ul>
    );
    
};

export default ImagesCollections;

