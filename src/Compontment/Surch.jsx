import React from 'react'
import StarRaiting from './StarRaiting'


const Surch = ({handelRating,handelSurch,surchValue,surchRating}) => {
    return (
        <div >
            <h1 >Movies List</h1>
            <form  className='Surch' style={{display:'flex'}}>
                <input value={surchValue} onChange={handelSurch} type="text" placeholder="Surch..." style={{paddingRight:100 ,marginRight:10}}/>
                <StarRaiting handelRating={handelRating} rating={surchRating}/>
                
            </form>
        </div>
    )
}

export default Surch
