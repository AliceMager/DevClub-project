import React, { useState } from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("")
    const [Tablist, setTablist] = useState("")
    const [TablistContains, setTablistContains] = useState("")
    const [infoOfSearch, setInfoOfSearch] = useState([])

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    const getContainerSearchBar = () => {
        if (Tablist != undefined && Tablist != []) {
            return 0;
        }
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
            .then((product) => product.json())
            .then((product) => {
                console.log(product)
                return product.items
            })
            .then((productArray) => {
                const titlelist = productArray.map((products) => {
                    return products.volumeInfo
                })

                return titlelist
            })
            .then((productTitleList) => {
                const tablist = productTitleList.map((products) => {
                    return products.title
                })
                setTablist(tablist)
            })
    }

    const findComplition = (event) => {
        setTablistContains([])
        let x = []
        const text = (event.target.value).toLowerCase()
        if(text == ""){
            setTablistContains([])
            return 0
        }
        for (const title in Tablist) {
            const titletext = Tablist[title].toLocaleLowerCase()
            
            if ((titletext.includes(text))) {
                x.push(Tablist[title])
            }
        }
        
        setTablistContains(x)
        

    }
    const callToFuncation = (event) => {
        getContainerSearchBar()
        handleInputChange(event)
        findComplition(event)
    }

    function getInfoOfTab(title,text1){
        return fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms")
            .then((product) => product.json())
            .then((product) => product.items)
            .then((productArray) => {
            const titlelist = productArray.find((products) =>
                products.volumeInfo.title == title
            )
            let x= []
            x.push((titlelist.id).toString())
            x.push((titlelist.kind).toString())
            setInfoOfSearch(x)
        })
            
    }

    const openMoreInfo = (event) => {
        getInfoOfTab(event.target.name,"f")
        
        const text = event.target.name + "\n" + "id: " + infoOfSearch[0] + "\n" + "kind: " + infoOfSearch[1] + "\n\n Click 'OK' to add this to your Wishlist"
        if(window.confirm(text)){
            props.setwishList(props.wishList.concat(event.target.name))
        }
    }

    const getShowTablist = () => {
        let tablistshow = []
        
        for(const i in TablistContains)
        {
            if(i > 20){
                return 0
            }
            tablistshow.push(<p><button onClick={openMoreInfo} name={TablistContains[i]} key={TablistContains[i]}>{TablistContains[i]}</button></p>)
        }
        return <div className="row2">{tablistshow}</div>;
    }

    return <div>
        Welcome {props.username}
        <br /><br />
        <input type="text" value={searchValue} onChange={callToFuncation} />
        <br /><br />
        {getShowTablist()}
    </div>
}

export default Search;