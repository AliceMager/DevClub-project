import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Home = (props) =>
 {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState("")

    const handleInputChange = (event) =>
    {
    
        setSearchValue(event.target.value)
    }

    const handleClearClick = () =>
    {
        props.setusername(searchValue)
        navigate("/search")

    }
    const shouldDisplayButton = searchValue.length > 0
    return( <div>
        <input type = "text" value={searchValue} onChange={handleInputChange}/>
        {shouldDisplayButton&&<button onClick={handleClearClick}>sumbit</button>}
        
    </div>)
}
 
export default Home;