const launchCounter = document.querySelector(".launch-counter"); 
const launchContainer = document.querySelector(".launch-container"); 

const url = "https://api.spacexdata.com/v4/launches/past"; 

async function getLaunches() {
    try {
        const response = await fetch(url); 
        const results = await response.json(); 
        console.log(results); 

        createHTMLCounter(results); 
        createHTMLLaunches(results); 
        
    } catch(error) {
        console.log(error); 
        launchCounter.innerHTML = "Error";  
    
    }
}
    getLaunches(); 

    function createHTMLCounter(results) {
        launchCounter.innerHTML= ""; 
        launchContainer.innerHTML= ""; 

        let counterFail = 0; 
        let counterSuccess = 0; 
      

        for (let i = 0; i < results.length; i++) {
                       
                if (results[i].success === false) counterFail++;
                if (results[i].success === true) counterSuccess++; 
        }            
              
            launchCounter.innerHTML += `
            <h2>Launches</h2>
            <p>Since 2006, SpaceX has launched <span class="bold big"> ${results.length} </span>rockets</p>
            <p>Successful launches:<span class="bold big"> ${counterSuccess}</span></p>
            <p>Failed launches: <span class="bold big">${counterFail}</span></p>`
    }

    function createHTMLLaunches(results) {
        launchContainer.innerHTML= ""; 

        for (let i = 0; i < results.length; i++) {

                // FORMAT LAUNCH DATE 

            let launchDates = results[i].date_local; 
            const launchDateSet = new Date(launchDates);
            const formatLaunchDate = launchDateSet.toDateString();  
            const launchYear = launchDateSet.getFullYear(); 
                
                // SET LAUNCH SUCCESS VALUE

            let launchSuccess = "&#x274C;This launch was a failure"; 

            if(results[i].success === true) {
                launchSuccess = "&#x2705; This launch was successful"; 
                       
            }
                // SET DETAILS VALUE 
            let launchDetails ="No information available"

            if(results[i].details){
                launchDetails = results[i].details; 
            }

                // SET LAUNCH VIDEO VALUE 

            let launchVideo = ""; 
            let launchVideoMessage = "No video material available for this launch"; 

            if(results[i].links.webcast) {
                launchVideo = results[i].links.webcast; 
                launchVideoMessage = "Click to watch launch video!"; 
            }

                // SET LAUNCH NAME VALUE 

            let launchName = "-"; 
            if(results[i].name){
                launchName = results[i].name; 
            }
                // GET PATCH IMG 

            let patch = "../images/rocket.png"; 
                
            if(results[i].links.patch.small) {
                patch = results[i].links.patch.small; 
            }

                // GET &  DISPLAY ROCKET NAME  

            let rocketID = results[i].rocket; 
            let rocketUrl = "https://api.spacexdata.com/v4/rockets/" + rocketID; 

            async function getRocketDetails() {
                try{
                    const rocketResponse = await fetch(rocketUrl); 
                    const rocketResults = await rocketResponse.json(); 

                    let rocket = "Unknown"

                    if(rocketResults.name) {
                        rocket = rocketResults.name; 
                    }    
                        
                        // CREATE HTML                                   

                    launchContainer.innerHTML += `
                    <div class="launch-div ${launchYear} hide">
                    <img class="launch-patch" src="${patch}" alt="launch patch">
                    <p class="bold"><i class="far fa-calendar"></i> ${formatLaunchDate}</p>
                    <p><i class="fas fa-rocket"></i> ${rocket}</p>
                    <p class="launch-name">Launch name: ${launchName}</p>
                    <p> ${launchSuccess}</p> 
                    <p>Details: ${launchDetails}.</p>
                    <a class="bold underline" href="${launchVideo}" target="_blank"><i class="fab fa-youtube"></i> ${launchVideoMessage}</a>
                    </div>`
                        
                        const launchDivs = document.querySelectorAll(".launch-div"); 

                        for(let j = 0; j < launchDivs.length; j++){
                        
                            document.querySelector(".sort-year").addEventListener("change", function(event){
                            if(event.target.value === `${launchDivs[j].classList[1]}`) {
                                launchDivs[j].classList.remove("hide");
        
                            }else {
                                launchDivs[j].classList.add("hide"); 
                            }
                            }); 
                        }

                    } catch(error) {
                            console.log(error); 
                    }
  

                }
                  getRocketDetails();          
            
        }
    }
    