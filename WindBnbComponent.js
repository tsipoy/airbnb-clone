import React, { useState } from "react";
import staysData from "./stays.json";

function WindBnBComponent(props) {
    // const [stays, setStay] = useState([]);

    // const searchData = async (e) => {
    //     e.preventDefault();
    //     console.log("submitting");

    //     const url = staysData;
    //     console.log(url);

    //     try {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         console.log(data);
    //         setStay(data.results);
    //         console.log(stays);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    return (
        <div className="div-layout">
            return (
            <div>
                <p><img src={props.photo} /></p>
                <div className="entire-apartment">
                    <p><span className="super-host">SUPER HOST</span> {props.superHost}</p>
                    <p className="rooms">{props.type} {props.beds}</p>
                    <p className="rate"><span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0" /><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" /></g></svg></span>{props.rating}</p>
                </div>
                <p>{props.title}</p>
            </div>
                )
        </div>
    )
}

export default WindBnBComponent

