import React from 'react';
// import { useParams } from 'react-router';
import { Form } from "react-bootstrap";

const SearchBar = ({ value, handleInputChange, handleFormSubmit }) => {
    return (
        <div>
            <Form>
                <input
                    class="m-2"
                    style={{ height: "50px" }}
                    placeholder="search characters"
                    type="text"
                    id="header-search"
                    value={value}
                    onChange={handleInputChange}
                />
                <button
                    className="btn-lg m-2"
                    type="submit"
                    onClick={handleFormSubmit}
                >
                    Search
                </button>
            </Form>
        </div>
    )
}

export default SearchBar;