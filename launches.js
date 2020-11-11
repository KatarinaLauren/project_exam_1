// const container = document.querySelector(".container"); 

const url = "https://api.spacexdata.com/v4/launches/past"; 

async function getLaunches() {
    try {
        const response = await fetch(url); 
        const results = await response.json(); 
        // console.log(results); 

        createHTMLLaunches(results); 
        
    } catch(error) {
        console.log(error); 
        container.innerHTML = "Error"; 
    
    }
}
    getLaunches(); 

    function createHTMLLaunches(results) {
        container.innerHTML= ""; 
        let counterFail = 0; 
        let counterSuccess = 0; 

        for (let i = 0; i < results.length; i++) {
                if (results[i].success === false) counterFail++;
                if (results[i].success === true) counterSuccess++; 
              }

            //   console.log(counterFail); 
            //   console.log(counterSuccess); 
              


                

                container.innerHTML += `
                <div class="">
                <h2>Successful launches: ${counterSuccess}</h2>
                <h2>Failed launches: ${counterFail}</h2>
                
                </div> `
            
        }

        
    
