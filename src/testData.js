import homeIcon from "./projectSvgs/homeIcon.png"
import dashboardIcon from "./projectSvgs/dashboardIcon.svg"
import personalIcon from "./projectSvgs/personal.png"
import saleHubIcon from "./projectSvgs/saleHubIcon.svg"
import talentManagementIcon from "./projectSvgs/talentManagementIcon.svg"
import spendManagementIcon from "./projectSvgs/spendManagementIcon.svg"
import cardsIcon from "./projectSvgs/cardsIcon.svg"
import leaderboardIcon from "./projectSvgs/leaderboardIcon.svg"
import profileIcon from "./projectSvgs/profileIcon.svg"
import bankPerformanceIcon from "./projectSvgs/bankPerformanceIcon.svg"
import redCircle from "@/projectSvgs/redCircle.png"
import greenCircle from "@/projectSvgs/greenCircle.png"
import blueCircle from "@/projectSvgs/blueCircle.png"
import yellowCircle from "@/projectSvgs/yellowCircle.png"
import purpleCircle from "@/projectSvgs/purpleCircle.png"

export const navLinks = [
    {
        title:"Home",
        icon: homeIcon,
        link: "/home",
        dropdown:false,
        dropdownLinks:[]
    },
    {
        title:"Analytics Dashboard",
        icon: dashboardIcon,
        link: "/",
        dropdown:false,
        dropdownLinks:[]
    },
    {
        title:"Personal",
        icon: personalIcon,
        link: "",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Sales Hub",
        icon: saleHubIcon,
        link: "",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Talent Management",
        icon: talentManagementIcon,
        link: "",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Spend Management",
        icon: spendManagementIcon,
        link: "",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Cards",
        icon: cardsIcon,
        link: "/cards",
        dropdown:false,
        dropdownLinks:[]
    },
    {
        title:"Leaderboard",
        icon: leaderboardIcon,
        link: "/leaderboard",
        dropdown:false,
        dropdownLinks:[]
    },
    {
        title:"Profile & Settings",
        icon: profileIcon,
        link: "/profile",
        dropdown:false,
        dropdownLinks:[]
    },
    {
        title:"Bank Performance",
        icon: bankPerformanceIcon,
        link: "",
        dropdown:true,
        dropdownLinks:[]
    }
]

export const balance = [
    {
        title: "wallet balance",
        amount: 50000.00
    },
    {
        title: "total savings balance",
        amount: 194000
    },
    {
        title: "total customers",
        amount: 919
    },
    {
        title: "total POS",
        amount: 0
    },
]

export const transfer = [
    {
        title:"total transfer",
        values: {
            today:500,
            yesterday:200,
            this_week:500,
            last_week:200
        }
    },
    {
        title:"total inflow",
        values: {
            today:2000000,
            yesterday:5000000,
            this_week:5000000,
            last_week:5000000
        }
    },
    {
        title:"total transations",
        values: {
            today:2000000,
            yesterday:5000000,
            this_week:5000000,
            last_week:5000000
        }
    },
    {
        title:"transaction count",
        values: {
            today:2000000,
            yesterday:5000000,
            this_week:5000000,
            last_week:5000000
        }
    },
    
]
export const transaction = [
    {
        id:1,
        title:"Total Cashout",
        header1:"Today",
        value1:1200000,
        header2:"yesterday",
        value2:1200000,
        icon1:"",
        icon2:""
    },
    {
        id:2,
        title:"Transaction status",
        header1:"Successful",
        value1:422,
        header2:"Failed",
        value2:19,
        icon1:greenCircle,
        icon2:redCircle
    },
    {
        id:3,
        title:"Average Transaction Count",
        header1:"Value",
        value1:20400,
        header2:"count",
        value2:422,
        icon1:"",
        icon2:""
    },
    {
        id:4,
        title:"Total Commission",
        header1:"POS Commission",
        value1:87000,
        header2:"Lotto Commission",
        value2:102000,
        icon1:"",
        icon2:""
    },
    {
        id:5,
        title:"Average commision per transaction",
        header1:"POS Commission",
        value1:500,
        header2:"Lotto Commission",
        value2:200,
        icon1:"",
        icon2:""
    },
    
]

export const chartData = {
    icon1:blueCircle,
    icon2:yellowCircle,
    icon3:purpleCircle,
    value1:105000000,
    value2:32000000,
    value3:42000000,
    header1:"send money",
    header2:"cashout",
    header3:"utilities and bills"
}