import React from 'react';



const WishList = (props) => {

    const removeFromWish = (event) => {
        const indexofwish = props.wishList.indexOf(event.target.name)
        //console.log(indexofwish)
        //console.log(event.target.name)
        if (indexofwish > -2) {
            props.wishList.splice(indexofwish, 1)
            props.setwishList(props.wishList)
          console.log(props.wishList)
          }
        
    }

    const getShowWishlist = () => {
        let wishlistshow = []
        for(const i in props.wishList)
        {
            wishlistshow.push(<p><button onClick={removeFromWish} key={props.wishList[i]} name={props.wishList[i]}>{props.wishList[i]}</button></p>)
        }
        console.log(props.wishList)
        return <div className="row3">{wishlistshow}</div>;
    }

    return <div>
        Wish List
        <br /><br />
        {getShowWishlist()}
    </div>;
}
 
export default WishList;