import { useContext, createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import UUID library
const ListContext = createContext();

export const ListProvider = ({ children }) => {
    const [lists, setList] = useState([]);

    const addList = (item) => {
        const currentDate = new Date();
        const id = uuidv4();
        const newItem = { ...item, date: currentDate, id: id };
        if (setList(lists => [...lists, newItem])) {
            return newItem
        }
        return false
    };
    const editList = (updatedItem) => {
        // Find the index of the item to be updated
        const index = lists.findIndex(item => item.id === updatedItem.id);
        if (index === -1) {
            // Item not found, handle error or return early
            console.error("Item not found for editing");
            return;
        }

        // Create a new array with the updated item replacing the old one
        const updatedLists = [...lists];
        updatedLists[index] = updatedItem;

        // Update the list state with the updated array
        setList(updatedLists);
    };
    const deleteList = (deletedItemId) => {
        // Find the index of the item to be deleted
        const index = lists.findIndex(item => item.id === deletedItemId);
        if (index === -1) {
            // Item not found, handle error or return early
            console.error("Item not found for deletion");
            return;
        }

        // Create a new array with the item removed
        const updatedLists = lists.filter(item => item.id !== deletedItemId);

        // Update the list state with the updated array
        setList(updatedLists);
    };

    return (
        <ListContext.Provider value={{ lists, addList, editList, deleteList }}>
            {children}
        </ListContext.Provider>
    );
}

export const useList = () => useContext(ListContext);
