const SortingList = () => {
    return <div>
        <div class="filter-sort-container">
            <div class="sort-container">
                <label for="sort">Sort by:</label>
                <select id="sort">
                    <option value="date">Jan - Mar</option>
                    <option value="name">Apr - Jun</option>
                    <option value="name">Jul - Sept</option>
                    <option value="name">Oct - Dec</option>
                </select>
            </div>
        </div>
    </div>
}

export default SortingList