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

              

            //   console.log(counterFail); 
            //   console.log(counterSuccess); 
              
            launchCounter.innerHTML += `
            <p>Since the start in 2002, SpaceX has launched <span class="bold">${results.length}</span>rockets</p>
            <p>Successful launches:<span class="success"> ${counterSuccess}</span></p>
            <p>Failed launches: <span class="fail">${counterFail}</span></p>`; 
              
        }

        function createHTMLLaunches(results) {
            launchContainer.innerHTML= ""; 
            for (let i = 0; i < results.length; i++) {
                // console.log(results[i].name);

                let launchSuccess = "a failure"; 
                let launchDetails ="No information available"


                if(results[i].success === true) {
                    launchSuccess = "successful"; 
                }

                if(results[i].details){
                    launchDetails = results[i].details; 
                }
        
        launchContainer.innerHTML += `
        <p>Launchdate: ${results[i].date_local}</p>
        <p>Launchname: ${results[i].name}</p>
        <p>Details: ${launchDetails}</p>
        <p>This launch was ${launchSuccess}</p> 
        
        ` 
            }
        }