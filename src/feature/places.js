import React from 'react'

const Place = (props) => {

    let result = props.results.map(post => {
        
        if (post.photos !== undefined && post.photos.length > 0 ) {
            console.log(post.name)
            // console.log(i, post)
            // console.log(post.rating)
            // console.log(post.price_level)
            // console.log(post.photos[0].getUrl())
            let photo = post.photos[0].getUrl()
            return (
                <div className="boxes">
                    <div className="place">
                        <img src={photo} alt={post.name} className='img-fluid'/><br />
                    </div>
                    <h3>{post.name}</h3>
                    <h5>{post.vicinity}</h5>
                    <h5>Rating ({post.user_ratings_total}): {post.rating}</h5>
                    <h5>Price: {post.price_level}</h5>
                </div>
                
            )
        } else {
            
            return null
            
        }
    });
    return result
}
export default Place;