import React, { useState } from "react";
import staysData from "./stays.json";
import Form from "./Form";
import WindBnbComponent from "./WindBnbComponent";


function Search() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState("");
    const [maxGuest, setMaxGuest] = useState("");

    const searchCities = (e) => {
        setLocation(e.target.value);
        const filteredCities = staysData.filter(stay => {
            return stay.city.toLowerCase() === e.target.value;
        })
        setData(filteredCities)
    }

    const addGuest = (e) => {
        setMaxGuest(e.target.value);
        const filteredMaxGuest = staysData.filter(guest => {
            return guest.maxGuests.toString() === e.target.value;
        })
        setData(filteredMaxGuest)
    }

    const searchData = e => {
        e.preventDefault();
        setData(staysData);
    }

    const mapData = data.map(stayData => {
        return <WindBnbComponent key={stayData.title} {...stayData} />
    })
    // console.log(mapData);


    const mapFiltered = staysData.map(stay => <WindBnbComponent key={stay.title} {...stay} />
    )

    return (
        <>
            <form onSubmit={searchData}>
                <Form selectCity={searchCities} chooseGuest={addGuest} guests={maxGuest}/>
            </form>
            <div className="div-layout">
                {(location || maxGuest) 
                    ? mapData
                    :  mapFiltered
                }
            </div>
        </>
    )
}

export default Search