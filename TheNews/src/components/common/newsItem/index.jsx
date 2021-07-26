import React from "react"
import {Icon} from "../icon";
import {Button} from "../ui/button";
import {Link} from "react-router-dom";


export const NewsItem = ({data}) => {

    //расскидываю данные приходящие из пропса data


    return(
        <div id="news-item" className="news-item-wrapper relative mb-3">
            <div className="row">
                <div className="col-9">
                    <div className="autor flex items-center cursor-pointer">
                        <Icon name="user" size={15} className="mr-2.5" color="#000" />
                        <span className="autor-name text-sm">{data?.autor.name}</span>
                    </div>
                    <div className="about-autor">
                        <div className="flex items-center">
                            <Icon name="user" size={10} className="mr-2.5" color="#000" />
                            <div className="text-lg">{data?.autor?.name}</div>
                        </div>

                        <div className="autor-description">
                            {data?.autor.description}
                        </div>

                        <div className="autor-footer flex items-center justify-between">
                            <div className="subscribes">{data?.autor.subscribes} Followers</div>
                            <Button size="xs" color="green">
                                Follow
                            </Button>
                        </div>
                    </div>
                    <Link to={{pathname:"/news", query: data}} className="news-title text-2xl">{data?.newsTittle}</Link>
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
