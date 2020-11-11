// const container4 = document.querySelector(".container4"); 

const url4 = "https://api.spacexdata.com/v4/launches/latest"; 

async function getLastLaunch() {
    try {
        const responseLastLaunch = await fetch(url4); 
        const resultsLastLaunch = await responseLastLaunch.json(); 
        // console.log(resultsLastLaunch); 

        createHTMLLastLaunch(resultsLastLaunch); 
        
    } catch(error) {
        console.log(error); 
        container.innerHTML = "Error"; 
    
    }

}
getLastLaunch(); 

    function createHTMLLastLaunch(resultsLastLaunch) {
        let launchDay = resultsLastLaunch.date_local; 
        const latestLaunch = new Date(launchDay);
        const formattedLatestLaunch = latestLaunch.toDateString(); 

            container4.innerHTML += `
            <div class="">
            <h2>Last launch: ${formattedLatestLaunch} </h2>        
            
            </div> `
            
        
}