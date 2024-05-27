import React, { useState, useEffect } from "react"
import axios from "axios"

const UseEffect2 = () => {

    const [dataFromAPI2, setDataFromAPI2] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios.get("https://reqres.in/api/users?delay=3").then((res) => setDataFromAPI2(res.data.data))
        setIsLoading(false)
    }, [])

    return (
        <div className="peopleContainer">
            {isLoading ? (
                <span className="loader"></span>
            ) : (
                dataFromAPI2?.map((el) => (
                    <div
                        key={el.id}
                        style={{
                            border: "1px solid green",
                            width: "200px",
                            margin: "2em",
                        }}
                    >
                        <img src={el.avatar} alt={el.first_name} />
                        <h3>
                            {el.first_name} {el.last_name}
                        </h3>
                        <p>
                            {el.email}
                        </p>
                    </div>
                )))}

        </div>
    )

}

export default UseEffect2