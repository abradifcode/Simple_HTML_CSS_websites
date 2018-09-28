document.addEventListener("DOMContentLoaded", function () {
    var myHtml = "";
    var loginSection = document.getElementsByClassName("loading-section")[0];
    var process = document.getElementById("process-btn");
    var shadowSection = document.getElementsByClassName("loading-section-shadow")[0]
    
    process.addEventListener("click", function () {
        process.style.display = "none";
        myHtml += "<h2>LOADING</h2><div class='loading-bar'><div class='loading'></div></div>";
        loginSection.innerHTML = myHtml;
        loginSection.classList.add("loading-border");
        shadowSection.classList.add("loading-border2")
    });

});
