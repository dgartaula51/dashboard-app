import "./widgets.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Widget ({type}) {
  let data;

  //temp
  const amount = 100;
  const diff = 20;

  switch(type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link:"See all users",
        icon: <PersonIcon className="icon" style={{backgroundColor:"rgba(128, 165, 32, 0.2)", color:"crimson"}}/>
      };
      break;
    
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link:"View all orders",
        icon: <ShoppingCartIcon className="icon" style={{backgroundColor:"rgba(128, 165, 32, 0.2)", color:"goldenrod"}}/>
      };
      break;
      
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link:"View net earnings",
        icon: <AttachMoneyIcon className="icon" style={{backgroundColor:"rgba(128, 165, 32, 0.2)", color:"green"}}/>
      };
      break;
      
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link:"See details",
        icon: <AccountBalanceWalletIcon className="icon" style={{backgroundColor:"rgba(128, 165, 32, 0.2)", color:"purple"}}/>
      };
      break;
      
    default:
        break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          {diff} % 
        </div>
          {data.icon}
      </div>
    </div>
  )
}

export default Widget
