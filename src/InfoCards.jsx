import React from "react";
export const  InfoCards =({title , imgUrl ,children})=>{
    return(
        <div className="card2-container">
            {imgUrl && <img src={imgUrl} alt="feature icon"></img>}
            {
                title && <h1>
                    {title}
                </h1>
            }
            <span className="cards-description">{children}</span>

        </div>

      );
};

export default InfoCards;
    