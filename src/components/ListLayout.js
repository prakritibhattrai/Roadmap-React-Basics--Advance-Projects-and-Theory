import { Link } from "react-router-dom"
import List from "./List"
import SearchFilter from "./Search"
import SortingList from "./SortingList"
import { useList } from "./ListContext"
import { useState } from "react"

const ListLayout = () => {
    const { lists } = useList()
    const [filteredList, setFilteredList] = useState([])
    const handleSearch = (value) => {
        const filteredList =
            lists.filter(list => list.title.toLowerCase().includes(value.toLowerCase()) ||
                list.description.toLowerCase().includes(value.toLowerCase()))
        setFilteredList(filteredList)
        console.log(filteredList)
    }
    return <div className="home">
        <SearchFilter handleSearch={handleSearch} />
        <div className="list-layout">
            <div className="main-header">
                <h5 className="header-title">All List</h5>
                <SortingList />
                <Link to={'add'} className="addBtn">Add New Case</Link>
            </div>
            <List lists={filteredList.length > 0 ? filteredList : lists} />
        </div>

    </div>
}
export default ListLayout