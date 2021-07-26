import React from "react"
import {Icon} from "../icon"
import {Link} from "react-router-dom"
import {Button} from "../ui/button";
import {useDispatch} from "react-redux"
import {appLogout} from "../../../store/app/actions";

export const Header = () => {

    const dispatch = useDispatch()

    return(
        <div id="header">
            <div className="container">
                <div className="flex justify-between">
                    <Link className="flex items-center" to="/">
                        <Icon color="#000" name="dots" className="mr-3" size={20}/>
                            Логотип или что-то вроде того...
                        <Icon color="#000" name="dots" className="mr-3" size={20}/>
                    </Link>

                    <div className="flex items-center header-links">
                        <Link>
                            <Icon name="people" color="#757575" size={20}/>
                        </Link>
                        <Link>
                            <Icon name="bell" color="#757575" size={20}/>
                        </Link>
                        <Link>
                            <Icon name="copy" color="#757575" size={20}/>
                        </Link>

                        <Button onClick={() => dispatch(appLogout())} color="danger">
                            выйти
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
