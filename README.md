# Travera

## Summary
The live demo for the web application can be accessed here: [Travera](https://geraldcs.github.io/dwad-project-1/)

### Premise
Travera is a website where it allows the users to explore and discover different parts of Davao City.
### Context and Justification

When you think of the Philippines, the first place that would come to mind is the city of Manila or the white sand beaches of Boracay. Though they are admittedly beautiful and captivating in their own right, not much is known about other big cities across the country, and one such city that tends to get overlooked is the city of Davao.   

Davao City is one of the most popular cities in Mindanao (an island in the Philippines). Considered to be one of the safest cities in the country, it is rich in culture and history and is also abundant in beaches. This city certainly garnered more interest and recognition over the years, although unfortunately, this steady rise of popularity did not exempt them from the damage left by the pandemic. Countless business owners and industries (especially tourism) were hemorrhaging money due to the heavy restrictions implemented. 

In the wake of pandemic, majority of the regulations and restrictions were lifted, thus allowing a time for recovery in the economy. The Department of Tourism seeks to profit from not only the beauty of our natural resources but also the talent and products of our people, such as food, clothing, and other things that might appeal to both domestic and international tourists. 

### Organization’s Goals 

This project hopes to aid that vision by creating a web application that would allow the users to look up places they wish to explore and get recommendations on certain activities they wish to engage in. Be it looking for a coffee shop or the finest beach, Travera aims to guide locals and tourists alike. 

# 5 Planes of Design 

## Target audience group: 

### Foreigners who haven’t explored the Philippines

**Age**: 25 onwards

**Occupation**: Adults in the workforce from all backgrounds

**Educational Level**: Secondary to Tertiary

**IT Literacy Level**: Varying levels of computer proficiency

**Goals**: Explore the cities in the Philippines, specifically Davao. To be able to explore popular tourist spots and engage in their culture.

**Considerations:** No exposure to the cultures and what it’s like to be in the country. Although foreigners coming from Asian countries may have it easier, since some context overlaps, foreigners may have a harder time experiencing and immersing the everyday life.

### Foreigners who have explored the Philippines but haven’t been to Davao City yet 

**Age**: 25 onwards

**Occupation**: Adults in the workforce from all backgrounds

**Educational Level**: Secondary to Tertiary

**IT Literacy Level**: Varying levels of computer proficiency

**Goals**: To be able to explore different parts of the country, not just the capital city of Manila. To compare and contrasts of how it’s like to be in the quieter cities of the Philippines.

**Considerations:** These people have been exposed to certain parts of the country, thus making it easier to transition to a different city with little difficulty. They are more open to explore places of cultural and historical significance.

### Locals who are are already familiar with the city and is looking for more new places to discover 

**Age**: 18 onwards

**Occupation**: Teens/Adults in the workforce from all backgrounds

**Educational Level**: Secondary to Tertiary

**IT Literacy Level**: Varying levels of computer proficiency

**Goals**: To discover new places that they haven’t seen yet 

**Considerations:** Already familiar with tourist spots and destinations. Should be able to navigate easily. They should be able to find new favorite places to go to

## UI/UX: 

### User Stories and Acceptance Criteria 

| User Stories | Acceptance Criteria |
| --- | --- |
| As a foreigner that hasn’t visited the Philippines yet, I want to know the different places of interests and tourist spots in Davao City, so that I can find a place to enjoy | Load recommendations on places of interests. Expose the users on different cultures and tourist spots. |
| As a foreigner that has visited the country, but not Davao. I want to explore Davao city, so that I may be able to experience a different city and it’s culture, enjoy places of interests, and hopefully immerse in it | Discover places that might be similar to places they have already enjoyed in the previous city they have visited. |
| As a local who is already familiar with the city, I want to know places I haven’t been to so that I may explore more about my city. | Recommending new places that the user hasn’t visited yet. Bookmark and rate the places users have already visited. |

## Five Planes of UI/UX 

### Strategy 

- B2B (Business can pay a higher fee to have a increase their chance of being featured)
- User: People who wish to explore Davao City
- User Needs: Discover tourist spots and great places to engage in (shopping, exercising, swimming, etc.)
- User Pain Points:
    - Though the user can leave a review, they aren’t currently able to see the reviews of other people

### Scope

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

## Design

### Wireframe

Hand Drawn ([Screenshot by Lightshot (prnt.sc)](https://prnt.sc/nRz2jNbRfNgw))

### Color Palette 

<img src='./images/color_palettes.png'/>

The choice of color was meant to synergize with the color of the map. The simplicity of the color choice makes it easier to focus.

### Font Palette

Body, Search Results: TeXGyreHeros

Navbar Icons: TeXGyreAdventor

Search Entry/Input: Raleway Light

### Technologies Used

- HTML5 (HyperText Markup Language)
- CSS (Cascading Style Sheets)
- JavaScript
    - Used to create functionality on buttons and user input
- [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Used in making the navigation bar
- [Leaflet](https://leafletjs.com/)
    - Used to create the map feature
- Foursquare API [(Get Place Photos)](https://developer.foursquare.com/reference/place-search)
    - Access the necessary data to load in the coordinates
- [Axios - Libraries - cdnjs ](https://cdnjs.com/libraries/axios)
    - HTTP Client for browser
- [Font Awesome](https://fontawesome.com/)
    - *Travera* Icon
    - Icons in the navigation bar

# Test Cases

| # | Description | Steps | Expected |
| --- | --- | --- | --- |
|  | Prerequisite: The user is at the map form |  |  |
| 1 | Search for ‘cafes’ | 1) Enter the word ‘cafe/cafes’ into the textbox | Display a list of maps (randomized order). The Map will load markers for the coffee shop |
| 2  | Find out different type of establishments under the Restaurants Icon | 1) Click the Restaurants icon. 2) Click on any marker icon | Display a popup. The establishment type should appear right below the five stars and bookmark icon |
| 3 | Form validation | 1) Click the magnifying glass icon without typing anything inside the form | The placeholder should say: *Please enter a location. This will not load any/new marker icons  |
| 4 | Fly to a certain location under the Hotels category | 1) Click the Hotels icon.    2) Select any hotel under the list beneath the search form | It should zoom in to the current location. This will then display the popup containing the address and type of establishment |
## Deployment

The live demo for the web application can be accessed here: [Travera](https://geraldcs.github.io/dwad-project-1/)

## Limitations

- Users are not able to bookmark and write a review since there’s no backend.
- Photos are not loaded, only the the name of establishment, its location, and type of establishment

## Attribution

### Fonts and Icons

Google Fonts for fonts displayed in the web application

Font Awesome Icons

[Travera Icon](https://fontawesome.com/search?q=maps&s=solid%2Cbrands)

[Hotel Icon](https://fontawesome.com/icons/hotel?s=solid)

[Restaurant Icon](https://fontawesome.com/icons/utensils?s=solid)

[Mall Icon](https://fontawesome.com/icons/cart-shopping?s=solid)

[Café Icon](https://fontawesome.com/icons/mug-saucer?s=solid)

[Gym Icon](https://fontawesome.com/icons/dumbbell?s=solid)

[Club Icon](https://fontawesome.com/icons/martini-glass-citrus?s=solid)

[Park Icon](https://fontawesome.com/icons/tree?s=solid)

### Special Thanks

Teacher Ace, Paul and Arif for their effort and time
