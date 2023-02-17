//Skills practiced: fetch(), async/await syntax, .json(), 
//function expression, innerHTML, for…of loop, createElement(), append(),
//async functions, fetch, template literals, change event

//You will fetch random profile data from the 
//Random User Generator API(opens in a new tab).You’ll parse the data 
//to a JSON file and then create an array with the data.Finally, you’ll 
//create a function expression to populate data on the page, including the 
//country, name, and profile image.
const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector(".num-users");

const getData = async function (numUsers) { 
    //fetch data from the API and access only 8 results at a time
    const usersRequests = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    //declare variable data to parse the data captured by usersRequests variable using .json
    const data = await usersRequests.json();
    //console.log(data);

    //this is an array of user objects called results
    const userResults = data.results; 
    console.log(userResults);
    displayUsers(userResults);

};

getData(1);

const displayUsers = function (userResults) { 
    //begin by emptying the randomFolks 
    //element’s contents to make sure you 
    //don’t duplicate any DOM elements
    randomFolks.innerHTML = "";

    //loop over userResults 
    //for every user, select their country, first name and avatar url with 
    //the size of medium
    for (const user of userResults) { 
        const country = user.location.country;
        const name = user.name.first;
        const imageURL = user.picture.medium;
        const phone = user.phone;

        //create a div element and populate its innerHTML
        const userDiv = document.createElement("div");
        userDiv.innerHTML =
            `<h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageURL} alt="User avatar" />
            <h4>Call me: ${phone}</h4>`;
        
        randomFolks.append(userDiv);
    }

    
};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);
});