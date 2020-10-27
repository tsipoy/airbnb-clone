import React, { useState } from "react";
import staysData from "./stays.json";
import Form from "./Form";
import WindBnbComponent from "./WindBnbComponent";
import AddGeusts from "./AddGuests";


function Search() {
    const [data, setData] = useState([]);
    const [location, setLocation] = useState("");
    const [maxGuest, setMaxGuest] = useState("");
    const [isOpen, setIsOpen] = useState(false);

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


    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const mapData = data.map(stayData => {
        return <WindBnbComponent key={stayData.title} {...stayData} />
    })
    // console.log(mapData);


    const mapFiltered = staysData.map(stay => <WindBnbComponent key={stay.title} {...stay} />
    )

    return (
        <>
            <div>
                <button className="openButton" onClick={handleClick}>
                    <span className="span1">Helsinki, Finland</span>
                    <span className="span2">Add guests</span>
                    <span className="span3"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg></span>
                </button>
                {isOpen &&
                    <form onSubmit={searchData}>
                        <Form selectCity={searchCities} chooseGuest={addGuest} guests={maxGuest} />
                    </form>
                }
            </div>
            <AddGeusts />
            <div className="div-layout">
                {(location || maxGuest)
                    ? mapData
                    : mapFiltered
                }
            </div>
        </>
    )
}

export default Search