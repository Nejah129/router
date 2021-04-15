import React from 'react'

const StarRaiting = ({rating, handelRating}) => {
    const stars =(rating)=>{
        var star =[];
        for ( let i=1; i<= 5; i++){
            if (i<= rating){
                star.push(<span onClick={()=>handelRating(i)} style={{color: "gold" , fontSize:"20"}}>★</span>) 
            }
            else star.push(<span onClick={()=>handelRating(i)} style={{color: "red" , fontSize:"20"}}>★</span>);
        }
        return star;

    }
    return (
        <div>
         {stars(rating)} 
        </div>
       
    )

    
}
StarRaiting.defaultProps={
    rating:1,
    handelRaintng:()=>{}
};

export default StarRaiting
