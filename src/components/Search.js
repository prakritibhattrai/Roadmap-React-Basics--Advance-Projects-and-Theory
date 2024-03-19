import { useState } from "react"

const Search = ({ handleSearch }) => {
    const [search, setSearch] = useState('');

    const handleChange = (value) => {
        handleSearch(value)
    }

    return <>
        <div className="navbar">

            <div className="search">
                <h6>Case Listing Application</h6>
                <input name="search" placeholder="Search Title, Description"
                    onChange={(e) => handleSearch(e.target.value)} />
            </div>
        </div>
    </>
}


export default Search