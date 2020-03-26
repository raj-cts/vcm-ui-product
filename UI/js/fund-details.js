var jsonData = [];

$(document).ready(function() {

    $.getJSON("./js/fund-details.json", function(data) {
        jsonData = data;
        console.log(data);
        var ratingspan = "<span class='morningStarCmpnt-item'><i class='icon-Star'></i></span>"

        var fund_as_of = data[0].as_of;
        var fund_wk_change = data[0].wk_change;
        var goup_overall = data[0].morningStarGroupOverall;
        var categoryName = data[0].category;
        var ratings = data[0].rating;

        $("#as_of").append(fund_as_of);
        $("#wk_change").append(fund_wk_change);
        $("#morningStarGroupOverall").append(goup_overall);
        $("#category").append(categoryName);
        console.log(ratings);
        for (var i = 0; i < ratings; i++) {
            $(".morningStarGroupOverall").append(ratingspan);
        }
    });
}); 