const rocketContainer = document.querySelector(".rocket-container");
const url2 = "https://api.spacexdata.com/v4/rockets"; 

async function getRockets() {
    try {
        const responseRockets = await fetch(url2); 
        const resultsRockets = await responseRockets.json(); 
        // console.log(resultsRockets); 

        createHTMLRockets(resultsRockets); 
        
    } catch(error) {
        console.log(error); 
        rocketContainer.innerHTML = "Error"; 
    }
}   

getRockets(); 

    function createHTMLRockets(resultsRockets) {
        rocketContainer.innerHTML= ""; 

        for (let i = 0; i < resultsRockets.length; i++) {
            var flickrImages = resultsRockets[i].flickr_images; 

            for (let j = 0; j < flickrImages.length; j++) {
                if (j ===1) {
                    break; 
                } 

                const images = flickrImages[0]; 

                rocketContainer.innerHTML += `
                <div class="rocket-div">
                <h2 class="rocket-name">${resultsRockets[i].name}</h2>

                <div class="rocket-info">
                <p><span class="bold">Height:</span> ${resultsRockets[i].height.meters} meters</p>
                <p><span class="bold">Weight:</span> ${resultsRockets[i].mass.kg} kg</p>
                <p><span class="bold">First flight:</span> ${resultsRockets[i].first_flight}</p>
                <p><span class="bold">Cost to launch:</span> $ ${resultsRockets[i].cost_per_launch}</p>
                </div>
                <div class="rocket-description">
                <p>${resultsRockets[i].description}</p>    
                </div>
        
                <div class="rocket-images">
                <img class="rocket-image" src="${images}"></img>
                <p class="italic">${resultsRockets[i].name}</p>
                <a href="${resultsRockets[i].wikipedia}" target="_blank">Read more on Wikipedia</a>
                </div>
                </div>`; 
            }
        }
    }

