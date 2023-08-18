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
        link: "/",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Sales Hub",
        icon: saleHubIcon,
        link: "/",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Talent Management",
        icon: talentManagementIcon,
        link: "/",
        dropdown:true,
        dropdownLinks:[]
    },
    {
        title:"Spend Management",
        icon: spendManagementIcon,
        link: "/",
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
        title:"LeaderBoard",
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
        link: "/bankPerformance",
        dropdown:true,
        dropdownLinks:[]
    }
]