# 🎧 Podcast Browser App — DJS05 Show Detail Page with Routing and Navigation

 
In this task, I built a **Podcast Browsing App** that allows users to search, filter, and explore podcast shows — and view full show details on a separate page.
## 🚀 Project Overview

The app displays a list of podcast shows fetched from an external API.  
Users can click on any podcast card to open its **Show Detail Page**, which shows:
- Podcast title, image, and full description  
- Genre tags  
- Last updated date  
- Seasons and episode lists (expandable)  

The project also supports:
- **Dynamic Routing** using `react-router-dom`  
- **Search and Filter Preservation** (when navigating back)  
- **Responsive Design** for mobile, tablet, and desktop  

---


##  Learning Goals

- Understand **React component structure** and **props**
- Work with **dynamic routes and parameters**
- Use **fetch** to get data from an external API
- Manage **state** and **UI updates** with `useState` and `useEffect`
- Create **reusable and styled components** using CSS Modules

---



##  Technologies Used

- **React + Vite**
- **React Router DOM**
- **JavaScript (ES6+)**
- **CSS Modules**
- **Poppins Font**

---

##  How to Run the Project Locally

###  Clone the repository
```bash
git clone https://github.com/your-username/podcast-app.git

cd podcast-app
 Install dependencies
bash
Copy code
npm install
 Run the app
bash
Copy code
npm run dev
Then open the link shown in your terminal ( http://localhost:5173).

 Project Structure
css
Copy code
src/
 ┣ components/
 ┃ ┣ PodcastCard.jsx
 ┃ ┣ SeasonNav.jsx
 ┃ ┣ EpisodeCard.jsx

 ┣ pages/
 ┃ ┣ ShowDetail.jsx
 ┣ utils/
 ┃ ┣ formatDate.js
 ┃ ┣ fetchShowById.js
 ┣ App.jsx
 ┣ main.jsx
 ┣ index.css

 Navigation Flow
User opens the Home Page → sees a list of podcasts.

User clicks a podcast card → navigates to /show/:id (Show Detail Page).



 Author
Amahle Siguca
 Front-End Development Student @ CodeSpace Academy
 Passionate about building clean and responsive user interfaces.

