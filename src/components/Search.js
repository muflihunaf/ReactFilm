import React, {useState} from 'react';

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearchInputChanges = (e) =>{
        setSearchValue(e.target.value);
    }
    const resetInputField = () =>{
        setSearchValue("");
    }
    const callSerachFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }
    return(
        <form className="search">
            <input value={searchValue} onChange={handleSearchInputChanges} type="text" />
            <input onClick={callSerachFunction} type="submit" value="cari" />
        </form>
    );
}

export default Search;