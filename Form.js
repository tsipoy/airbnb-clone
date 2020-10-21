import React from "react";

function Form(props) {
    return (
        <form>
                <label>
                    <select name="city" className="input">
                        <option value="">--Please choose an option--</option>
                        <option value="helsinki">Helsinki, Finland</option>
                        <option value="turku">Turku, Finland</option>
                        <option value="oulu">Oulu, Finland</option>
                        <option value="vaasa">Vaasa, Finland</option>
                    </select>
                    <input type="text" placeholder="Add guest" className="input-add" />
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                    </button>
                </label>
        </form>
    )
}

export default Form