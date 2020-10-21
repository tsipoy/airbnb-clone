import React, { useState } from "react";
import staysData from "./stays.json";

function WindBnBComponent() {
    const [stays, setStay] = useState([]);

    const searchData = async (e) => {
        e.preventDefault();
        console.log("submitting");

        const url = staysData;
        console.log(url);

        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setStay(data.results);
            console.log(stays);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div onSubmit={searchData} className="div-layout">
            {staysData.map(stayData => {
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
            })}
        </div>
    )
}

export default WindBnBComponent

