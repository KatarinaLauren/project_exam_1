
const containers = document.querySelectorAll(".container")

for(let i = 0; i < containers.length; i++) {
    containers[i].onclick = function () {

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
}




