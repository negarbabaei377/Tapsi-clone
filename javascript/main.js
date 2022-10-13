const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click" , e=> {
        navbar.classList.toggle("nav__expanded")
    }
)

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab)=>{
    tab.addEventListener("click" , (e)=>{
        const targetTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

        // REMOVE PREVIOUS ACTIVE CLASSES
        tabs.forEach((tab)=>tab.classList.remove("active"));
        tabContents.forEach((tabContents)=>tabContents.classList.remove("active"));

        // ADD NEW ACTIVE CLASSES
        tab.classList.add("active");
        targetTabContent.classList.add("active");
    })
})