This project was created for an assigment in React course from Langara College. The design was based on materials provided by the course.

This is not intended to be hosted online - if you do, please add attribution to TMDb [https://www.themoviedb.org/about/logos-attribution]
# Running

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# The Assignment

For our assignment, we will be making a movies app with React. We will be using an open/public movies API to do this.

<span style="text-decoration: underline;">**Setup Steps:**</span>

1\. Go to **[https://www.themoviedb.org/](https://www.themoviedb.org/)** Register an account to get an API key.

2\. Create your React project

<span style="text-decoration: underline;">**IMPORTANT (PLEASE READ):**</span>

**1\. Use v3 of the API and authenticate your requests using your API Key [https://developers.themoviedb.org/3](https://developers.themoviedb.org/3)**

**2\. API endpoints to be used (all GET endpoints):**

**Movies**

*   **now playing**
*   **popular**
*   **top rated**
*   **upcoming**

**Search**

*   **movie**
*   **multi**
*   **tv**

**TV**

*   **airing today**
*   **on the air**
*   **popular**
*   **top_rated**

**3\. Do NOT use any of the wrapper libraries to make requests to the API, instead use the native fetch function/axios npm package. Marks will be deducted if wrapper libraries are used.**

4\. Do NOT use react hooks. Use the traditional react class container component structure which I have covered in class.

<span style="text-decoration: underline;">**Desired Functionality:**</span>

Create three tabs. The first and third tabs should fetch from the movie and tv endpoints respectively. There should be a dropdown box displayed with the sub type within that respective endpoint. Upon selecting another selection from that dropdown box, the list of results should update to reflect the updated response from the new query. Likewise, when selecting another tab the results list should update to display the updated media and search type. When the search results tab is clicked, it should initially display a message prompting the user to enter a search query term nothing is entered in the input box. When the user starts to enter a search query, it should prompt the user to initiate a search. If the search yields no results, there should be a corresponding message displayed for that. There should be a dropdown box in the search form which is used to modify the type of search being done.

<span style="text-decoration: underline;">**Marking Scheme:**</span>

Overall Layout (4 points)

*   the accuracy of the layout of all the different components/elements (search bar/button, tabs and article content renderings

Overall Functionality (8 points)

*   API call, returning the correct information and dynamically displaying under the corresponding tab
*   Search function working properly, yielding the correct response from the API and correctly displayed
*   The appropriate prompt messages showing.
*   No errors when switching between tabs

Code Quality (8 points)

*   Implementation of proper React component structure and concepts
*   Pre-established react best practices demonstrated in class
*   Component reusability
*   Code modularity and encapsulation

BONUS (2 points)

*   Implement pagination where it displays the first 10 results and then for the rest be on a second clickable page.

<span style="text-decoration: underline;">**Submission Format:**</span>

Please push your code to your GitHub account and submit a link to the repository to me.

<span style="color: #cf2a27;">Late submissions will be deducted 5 points. Please submit your assignment before the deadline.</span>