import { useState } from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WatchListAction from "./WatchListAction";


export default function WatchListItem({stock}){
    const [showWatchlistAction,setShowWatchlistAction]=useState(false);
    
    const handleMouseEnter=(event)=>{
        setShowWatchlistAction(true);
    }
     const handleMouseLeave=(event)=>{
        setShowWatchlistAction(false);
    }
    return(
        <>
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown? "down":"up" }>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>&nbsp;
                    {stock.isDown?<KeyboardArrowDownIcon className="down"/>:<KeyboardArrowUpIcon className="up"/>}&nbsp;
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistAction && <WatchListAction uid={stock.name}/>}
        </li>
        </>
    )
}