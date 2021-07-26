import React from "react"
import {useLocation} from "react-router-dom";
import {Icon} from "../../../../common/icon";

export const NewsPage = () => {

    const location = useLocation()

    console.log("location", location.query)
    return (
        <div id="news-page">
            <div className="container">
                <div className="user py-3">
                    <div className="flex">
                        <Icon name="user" color="#000" size={50}/>
                        <div className="user-name">
                            {location.query?.autor.name}
                        </div>
                    </div>
                    <div className="description">
                        {location.query?.autor.description}
                    </div>
                </div>
            <div className="">{location.query?.newsTittle}</div>
            <img src={location.query?.imgPath} />
                <div className="">{location.query?.newsDescription}</div>
            </div>
        </div>
    )
}
