import React from "react"
import {Icon} from "../icon";

export const NewsItem = ({data}) => {
    return(
        <div id="news-item" className="news-item-wrapper mb-3">
            <div className="row">
                <div className="col-9">
                    <div className="autor flex items-center">
                        <Icon name="user" size={30} color="#000" />
                        <span className="autor-name text">{data?.autor}</span>
                    </div>
                    <div className="news-title text-2xl">{data?.newsTittle}</div>
                    <div className="news-description">{data?.newsDescription}</div>
                    <div className="news-item-footer">
                        {data?.mounth} <span>·</span> {data?.time} <span>·</span> <span className="theme">{data?.theme}</span>
                    </div>
                </div>
                <div className="col-3">
                    <img src={data?.imgPath} />
                </div>
            </div>
        </div>
    )
}
