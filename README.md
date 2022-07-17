# Travera

# Summary
### Premise
Travera is a website where it allows the users to explore and discover different parts of Davao City.
### Context and Justification

When you think of the Philippines, the first place that would come to mind is the city of Manila or the white sand beaches of Boracay. Though they are admittedly beautiful and captivating in their own right, not much is known about other big cities across the country, and one such city that tends to get overlooked is the city of Davao.   

Davao City is one of the most popular cities in Mindanao (an island in the Philippines). Considered to be one of the safest cities in the country, it is rich in culture and history and is also abundant in beaches. This city certainly garnered more interest and recognition over the years, although unfortunately, this steady rise of popularity did not exempt them from the damage left by the pandemic. Countless business owners and industries (especially tourism) were hemorrhaging money due to the heavy restrictions implemented. 

In the wake of pandemic, majority of the regulations and restrictions were lifted, thus allowing a time for recovery in the economy. The Department of Tourism seeks to profit from not only the beauty of our natural resources but also the talent and products of our people, such as food, clothing, and other things that might appeal to both domestic and international tourists. 

### Organization’s Goals 

This project hopes to aid that vision by creating a web application that would allow the users to look up places they wish to explore and get recommendations on certain activities they wish to engage in. Be it looking for a coffee shop or the finest beach, Travera aims to guide locals and tourists alike. 

Access the live demo here

# 5 Planes of Design 

---

## Target audience group: 

---

### Foreigners who haven’t explored the Philippines (H3)

**Age**: 25 onwards

**Occupation**: Adults in the workforce from all backgrounds

**Educational Level**: Secondary to Tertiary

**IT Literacy Level**: Varying levels of computer proficiency

**Goals**: Explore the cities in the Philippines, specifically Davao. To be able to explore popular tourist spots and engage in their culture.

**Considerations:** No exposure to the cultures and what it’s like to be in the country. Although foreigners coming from Asian countries may have it easier, since some context overlaps, foreigners may have a harder time experiencing and immersing the everyday life.

### Foreigners who have explored the Philippines but haven’t been to Davao City yet (H3)

**Age**: 25 onwards

**Occupation**: Adults in the workforce from all backgrounds

**Educational Level**: Secondary to Tertiary

**IT Literacy Level**: Varying levels of computer proficiency

**Goals**: To be able to explore different parts of the country, not just the capital city of Manila. To compare and contrasts of how it’s like to be in the quieter cities of the Philippines.

**Considerations:** These people have been exposed to certain parts of the country, thus making it easier to transition to a different city with little difficulty. They are more open to explore places of cultural and historical significance.

### Locals who are are already familiar with the city and is looking for more new places to discover (H3)

**Age**: 18 onwards

**Occupation**: Teens/Adults in the workforce from all backgrounds

**Educational Level**: Secondary to Tertiary

**IT Literacy Level**: Varying levels of computer proficiency

**Goals**: To discover new places that they haven’t seen yet 

**Considerations:** Already familiar with tourist spots and destinations. Should be able to navigate easily. They should be able to find new favorite places to go to

## UI/UX: 

---

### User Stories and Acceptance Criteria (H3)

| User Stories | Acceptance Criteria |
| --- | --- |
| As a foreigner that hasn’t visited the Philippines yet, I want to know the different places of interests and tourist spots in Davao City, so that I can find a place to enjoy | Load recommendations on places of interests. Expose the users on different cultures and tourist spots. |
| As a foreigner that has visited the country, but not Davao. I want to explore Davao city, so that I may be able to experience a different city and it’s culture, enjoy places of interests, and hopefully immerse in it | Discover places that might be similar to places they have already enjoyed in the previous city they have visited. |
| As a local who is already familiar with the city, I want to be know places I haven’t been to so that I may explore more about my city. | Recommending new places that the user hasn’t visited yet. Bookmark and rate the places users have already visited. |

## Five Planes of UI/UX (H2)

### Strategy (H3)

- B2B (Business can pay a higher fee to have a increase their chance of being featured)
- User: People who wish to explore Davao City
- User Needs: Discover tourist spots and great places to engage in (shopping, exercising, swimming, etc.)
- User Pain Points:
    - Though the user can leave a review, they aren’t currently able to see the reviews of other people

### Scope (H3)

*Functional Requirements*

- Search by place category
- Search by entering keywords (’cafes’, ‘restaurants’, etc.)
- Generate random locations by clicking the icons right next the search bar

*Content Requirements*

- Name of establishment
- Provide the type of establishment
- Address of establishment

*Non-functional requirements*

- Mobile responsiveness

## Design (H2)

---

### Wireframe (H3)

Hand Drawn ([Screenshot by Lightshot (prnt.sc)](https://prnt.sc/nRz2jNbRfNgw))

### Color Palette (H3)

<Image>

The choice of color was meant to synergize with the color of the map. The simplicity of the color choice makes it easier to focus.

### Font Palette (H3)

Body, Search Results: "TeXGyreHeros", sans-serif

Navbar Icons: font-family: "TeXGyreAdventor", sans-serif;

Search Entry/Input: font-family: "Raleway Light", sans-serif;

### Technologies Used

- HTML5 (HyperText Markup Language)
- CSS (Cascading Style Sheets)
- JavaScript
    - Used to create functionality on buttons and user input
- Bootstrap 5.0 [Introduction · Bootstrap v5.0 (getbootstrap.com)](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Used in making the navigation bar
- Leaflet [Leaflet - a JavaScript library for interactive maps (leafletjs.com)](https://leafletjs.com/)
    - Used to create the map feature
- Foursquare API [Get Place Photos (foursquare.com)](https://developer.foursquare.com/reference/place-search)
    - Access the necessary data to load in the coordinates
- Axios [axios - Libraries - cdnjs - The #1 free and open source CDN built to make life easier for developers](https://cdnjs.com/libraries/axios)
    - HTTP Client for browser
- Font Awesome [Font Awesome](https://fontawesome.com/)
    - *Travera* Icon
    - Icons in the navigation bar

## Deployment (H2)

---

The live demo for the web application can be accessed here: [Travera (geraldcs.github.io)](https://geraldcs.github.io/dwad-project-1/)

## Limitations (H2)

---

- Users are not able to bookmark and write a review since there’s no backend.
- Photos are not loaded, only the the name of establishment, its location, and type of establishment

## Attribution (H2)

---

### Fonts and Icons

Google Fonts for the raleway light

Font Awesome Link here for the icons and logos

### Special Thanks

Teacher Ace, Paul and Arif for their effort and time