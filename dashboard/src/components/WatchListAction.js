import { Grow, Tooltip } from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

export default function WatchListAction({ uid }) {
  const { openBuyWindow } = useContext(GeneralContext);
  const { openSellWindow } = useContext(GeneralContext);

  
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy" onClick={() => openBuyWindow(uid)}>Buy</button>
        </Tooltip>
        &nbsp;&nbsp;
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell"  onClick={() => openSellWindow(uid)}>Sell</button>
        </Tooltip>
        &nbsp;&nbsp;
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            {" "}
            <SignalCellularAltIcon className="icon" />
          </button>
        </Tooltip>
        &nbsp;&nbsp;
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHorizIcon className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
}
