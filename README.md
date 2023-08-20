# Liberty Assured Test
This project is a technical assessment Test. The design, recreated with ReactJs and NextJs, features a slick dashboard page of a dummy user of the website. The Mobile and Desktop features have been adequately catered for as this project is fully responsive. Let us take a quick look at the app in general and go deeper into each component.

## App Overview
To the best of my ability, I have created this application in such a way that it mimics a real-world application to be used by customers. 
I have imitated data coming from endpoints by creating a "testData" file which contains all the dummy data provided in the design. Sections of this file are exported and utilized in various components across the app. One of which is the Sidebar.

### The Side Bar
The sidebar is a fixed component of the app. By that, I mean it does not get reloaded, rerendered, or changed when the website is routed to another page. Check out the "layout.js" file in the App directory to see how this was achieved. The Sidebar consists of a Logo and a list of Navigation links to assist the user in navigating the application. On smaller screens, it turns to a hamburger menu that slides out from the right when the menu button is clicked. 
Even though only the "Analytics Dashboard" page design was the only page design provided, each Navigation link actually works the way it would in a real-world web application, routing you to a different page which all render an imaginative "Coming Soon" Component except the Analytics Dashboard page of-course.

### Page Header
The page header is a small component that renders the name of the page you're currently on as well as a Profile Snippet or a Menu button depending on what screen size you're on. It is important to note that the official Tailwind "breakpoints" were used in the development process.

### Dashboard 
The dashboard of the "analytics dashboard" page consists of a grid of multiple rectangular-shaped components which display various dummy user information. To accommodate smaller screens, the grid either comes out as 1 column 2 columns, or 4 columns to maintain a slick display on every screen. No screen discrimination here.

## Dependencies
All the dependencies used in the development of this web application can be found in the "package.json" file. Some notable ones are
1. Tailwind
2. Lottie-React
3. React-Chartjs-2

## Run Locally
The best way to run this project locally is to clone the repository into any folder of your choice.
Open the folder with a code editor of your choice.
Run "npm install" to get install the dependencies used.
Run "npm run dev" to run it locally.


## Developed by
### Bajomo David
### Reach me at:
### [Email](bajomodavid18@gmail.com)

### [Twitter](https://twitter.com/BDaiveed)
### [LinkedIn](https://www.linkedin.com/in/davidbajomo/)
### Check out my [Portfolio](https://portfoliodaiveed.netlify.app/) for more projects like this
