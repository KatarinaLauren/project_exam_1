
 var countDown = document.querySelector(".countdown")

const url3 = "https://api.spacexdata.com/v4/launches/next"; 

async function getNextLaunch() {
    try {
        const responseNextLaunch = await fetch(url3); 
        const resultsNextLaunch = await responseNextLaunch.json(); 
        console.log(resultsNextLaunch); 

        createHTMLNextLaunch(resultsNextLaunch); 
        
    } catch(error) {
        console.log(error); 
        countDown.innerHTML = "Next launch not found"; 
        countDown.style.color="red"
    
    }

}
getNextLaunch(); 

    function createHTMLNextLaunch(resultsNextLaunch) {
        let launchDate = resultsNextLaunch.date_local; 
        const launch = new Date(launchDate);
        const formattedLaunchDate = launch.toDateString(); 


        var countDownDate = launch.getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

           

            countDown.innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";;


            if (distance < 0) {
                clearInterval(x);
                countDown.innerHTML = "No planned launch";
              }
            }, 1000);


            // countdownContainer.innerHTML += `
            // <div class="">
            // <h2>Next launch: ${formattedLaunchDate} </h2>
            // <p>${resultsNextLaunch.details}</p>          
            
            // </div> `
            
        
    }