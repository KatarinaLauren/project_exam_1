const container2 = document.querySelector(".container2"); 

const url2 = "https://api.spacexdata.com/v4/rockets"; 

async function getRockets() {
    try {
        const responseRockets = await fetch(url2); 
        const resultsRockets = await responseRockets.json(); 
        // console.log(resultsRockets); 

        createHTMLRockets(resultsRockets); 
        
    } catch(error) {
        console.log(error); 
        container.innerHTML = "Error"; 
    
    }
}
getRockets(); 

    function createHTMLRockets(resultsRockets) {
        container2.innerHTML= ""; 
        

        for (let i = 0; i < resultsRockets.length; i++) {
               
              


                

                container2.innerHTML += `
                <div class="rockets">
                <h2>${resultsRockets[i].name}</h2>
                <p>Height: ${resultsRockets[i].height.meters} meters</p>
                <p>Weight: ${resultsRockets[i].mass.kg} kg</p>
                <p>First flight: ${resultsRockets[i].first_flight}</p>
                <p>Cost to launch: $ ${resultsRockets[i].cost_per_launch}</p>
                <p>${resultsRockets[i].description}</p>
                
                </div> `
            
        }
    }