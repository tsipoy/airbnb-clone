import React, { useState } from "react";
import staysData from "./stays.json";
import Form from "./Form";


function Search() {
    const [data, setData] = useState([]);

    const searchData = e => {
        e.preventDefault();
        setData(staysData);
    }

    const mapData = staysData.map(stayData => {
        return (
            <div>
                <p><img src={stayData.photo} /></p>
                <div className="entire-apartment">
                    <p><span className="super-host">SUPER HOST</span> {stayData.superHost}</p>
                    <p className="rooms">{stayData.type} {stayData.beds}</p>
                    <p className="rate"><span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g></svg></span>{stayData.rating}</p>
                </div>
                <p>{stayData.title}</p>
            </div>
        )
    })

    return (
        <>
            <form onSubmit={searchData}>
                <Form />
            </form>
            <div>
                {mapData}
            </div>
        </>
    )
}

export default Search