## Installation

```
npm install
```

```
npm start
```

### Important Note:

To run this project locally, the auth0 authentication URL needs to be changed to http://ocalhost:3000.

It is currently set on the live domain. Only the admin (me) can change this. Contact me if you need to run this project locally or a better option is to connect your local version with your own auth0 account.

## Project Links

View Backend Server Code: https://github.com/AyoCodess/All-in-one-dashboard-FULLSTACK

View Task Manager (CRUD operations) Backend Code: https://github.com/AyoCodess/All-in-on-dashboard-FRONT-END/blob/296514f8e9b31a051d8e7fe512d5e40c8496e528/src/Pages/Modules/ModuleSubPages/TaskInternal.js

Front-end version: https://github.com/AyoCodess/All-in-on-dashboard-FRONT-END

Front-end Live: [https://ayocodes-dashboard.netlify.app](https://ayocodes-dashboard.netlify.app/)

## Project details

A Dashboard for managing user productivity and other data.
Completed in: within five days.

## Libraries and APIs used

1. Auth0 - Authentication
2. React router v6 - Routing
3. Axios - Data fetching
4. Tailwind CSS, Tailwind UI, and HeroIcons- front-end design and CSS framework
5. Papaparse - CSV to array conversation
6. Raw Macro - Create-react-app does not allow importing the raw contents of a file. Used to retrieve the CSV content; used with Papaparse
7. HTML-react-parser - Coverts template literal string of DOM elements to react elements
8. React-minimal-pie-chart - Data visualisation
9. Use-file-upload - Uploading images to front-end
10. Open weather APIs - Local weather data
11. Therapy box APIs - News, Sport, and Clothes data
12. UN news RRS - News RSS feed
13. GNews API - News data

## Technology

React.js - Front-end framework

Express.js - Backend framework

Mongo DB - Database

## App features

1. Get the weather data at your current location with some visuals
2. Get the latest news via the GNews API and UN RSS feed
3. View the Italian football league 17/18 Champions League season match results and view what teams beat who
4. Upload your photos and view them in the main dashboard view
5. Task Manager - Local Storage and Backend (Express, MongoDB) options implemented
6. View the clothes someone wore in the past 1000 days (data visualisation)
7. API call error states are handled visually
8. Mobile responsive

## Problems I faced

### .env

I need to look into why IntelliSense was not picking up the REACT_APP*api_keys*. In the meantime, I injected the API keys into the code directly. As you know users could still inspect the code via the front-end and get the app keys. The app keys would have to be served via the backend.

### Authentication

Due to time constraints, I couldn’t prioritise the bespoke signup and login module. So instead, I opted to use the Auth0 library, which is battle-tested and offered secure authentication via google or standard email and password. In addition, all app routes are protected securely.

### BBC RSS feed

After figuring out how to fetch the RSS feed, which is often in XML format, and parsing the document, I realised that the HTML was invalid as many of the elements were left open, meaning that the HTML could not be parsed.

To illustrate, this is the parsed XML data from the BBC RSS feed.

```
 <article> <img src="https://www.bbc.co.uk/sport/cycling/60969663?at_medium=RSS&amp;at_campaign=KARANGA/image/large.png" alt="">

<h2> <a href="https://www.bbc.co.uk/sport/cycling/60969663?at_medium=RSS&amp;at_campaign=KARANGA" target="_blank" rel="noopener"> <![CDATA[Emily Bridges: UCI can stop transgender cyclist from competing even if she meets eligibility criteria]]> </a>

<article> <img src="https://www.bbc.co.uk/news/uk-politics-60304595?at_medium=RSS&amp;at_campaign=KARANGA/image/large.png" alt="">

<h2> <a href="https://www.bbc.co.uk/news/uk-politics-60304595?at_medium=RSS&amp;at_campaign=KARANGA" target="_blank" rel="noopener"> <![CDATA[UK elections 2022: A really simple guide]]> </a>

<article> <img src="https://www.bbc.co.uk/news/uk-politics-60695244?at_medium=RSS&amp;at_campaign=KARANGA/image/large.png" alt="">

<h2> <a href="https://www.bbc.co.uk/news/uk-politics-60695244?at_medium=RSS&amp;at_campaign=KARANGA" target="_blank" rel="noopener"> <![CDATA[Election 2022: Is there an election in my area?]]> </a>
```

I'm sure there could be some sort of regular expression algorithm to fix this, and this is something I am yet to learn.

To verify this further, I used another RSS; the UN RSS feed. I was able to parse it successfully with the same process of functions. I display these feed results in the app.

### Sport

I did not understand the meaning of most of the CSV column headings and could not email for clarification as I worked on this module over the weekend. So, I assumed that FTHG = Home team goals and FTAG = Away team goes against and used this assumption to calculate and display data.

## Current App Bugs

### Task Manager

The user input value is displayed in the main input field when updating both update input fields dynamically.

### Authentication

If you refresh any page while logged in, you will be re-directed to the landing page. To return to the page you were previously on, click “Login,” and you will automatically be re-routed without authentication. This is because the landing page shares the same route "/" as the dashboard.

#### Here's why:

The module.js (the dashboard view) is not structured optimally. It is inside dashbaord.js, which is the app landing page. As a result of my limited knowledge of how auth0 integrates with react-router 6, I structured the app this way to get the authentication to function.

Most documentation on integration between the two libraries is outdated and based on react-router v5. I also suspect I do not have a deep enough understanding of react-router to develop a viable solution intuitively just yet. This is something I need to spend time on.

### Backend

With my limited experience in the backend, I was learning as I went along. I have only written CRUD endpoints for the task manager. I did not have time to implement it for the photos. For context, this was my second time working with Express.js and Mongo DB, and I know I could quickly gain confidence with both libraries with practice.

I did not have the time to learn how to host the project with an operational backend via heroku. This is an area very new to me, but I'm super interested in learning about it.

### #Note

The hosted ve

## Considerations

1. Move module API call functions in App.js into separate files.
2. Enable user to bulk upload photos.
3. Consider Context API or Redux if app grows to manage state more efficiently. There was no need to use context at the apps current complexity.

### My overall experience

I found the whole process super enjoyable! I love learning new things and implementing them, and this project definitely gave me some of that. I have not worked with XML data before, nor many of the libraries mentioned in the library section. So I spent a lot of time reading and trying to acquire all I needed to solve the issues I ran into quickly.

I particularly enjoyed the refactoring process as I like to keep code 'tight' and maintainable, though I have some things to learn about software architecture and design patterns. If I had more time, I would refactor further.

I hit some roadblocks around authentication. In the end, I developed something that works, but the user experience could be more seamless. That said, having zero experience with auth0 and limited knowledge of react-router (I only used it for basic routing in past projects), I feel proud of what I have accomplished.

There are many aspects of this project that could be improved. Yet I hope I have sufficiently demonstrated my dedication to attempting the most optimal solutions (that the circumstances allow) with this assignment.

Thank you for the opportunity. I would be honoured to contribute to your team with my wellspring of ideas, leadership skills, adaptability, and passion for providing software that helps the vulnerable among us - something I am already invested in personally.
