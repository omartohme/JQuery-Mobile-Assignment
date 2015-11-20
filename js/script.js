var stepNum = {
    pageNum: 1,
    dataPassed: "I LOVE LEAGUE OF LEGENDS"
}
$(document).on("mobileinit", function(ev) {});
$(document).on("ready", function(ev) {
    $("#startTut").on("click", function(ev) {
        ev.preventDefault();
        if (localStorage.getItem("step")) {
            stepNum = JSON.parse(localStorage.getItem("step"));
        }
        var returnPage = "#lcs" + stepNum.pageNum.toString();
        $.mobile.pageContainer.pagecontainer("change", returnPage);
    });
    $(".nextP").on("click", function(ev) {
        stepNum.pageNum += 1;
        localStorage.setItem("step", JSON.stringify(stepNum));
    });
    $(".backP").on("click", function(ev) {
        stepNum.pageNum -= 1;
        localStorage.setItem("step", JSON.stringify(stepNum));
    })
});


