const container1 = document.querySelector(".container1"); 
const container2 = document.querySelector(".container2"); 
const container3 = document.querySelector(".container3"); 


    function changeTextBox() {

        if(this.firstElementChild.classList.contains("show")) {
            this.firstElementChild.classList.remove("show"); 
            this.firstElementChild.classList.add("hide"); 
            this.lastElementChild.classList.remove("hide"); 
            this.lastElementChild.classList.add("show");
        } else { 
            this.lastElementChild.classList.remove("show"); 
            this.lastElementChild.classList.add("hide"); 
            this.firstElementChild.classList.remove("hide"); 
            this.firstElementChild.classList.add("show");
        
        }
        }

        container1.addEventListener("click", changeTextBox);
        container2.addEventListener("click", changeTextBox); 
        container3.addEventListener("click", changeTextBox); 


