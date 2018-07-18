var selected = 1;
var already = false;


function start() {
    $("#submit-already").hide();
    $("#reason-input").bind("input propertyChange", function() {
        textareaChanged();
    });
    textareaChanged();
}

function categorySelected(i) {
    $("#cat-1").removeClass("col-selected");
    $("#cat-2").removeClass("col-selected");
    $("#cat-3").removeClass("col-selected");
    if (!already) $("#cat-" + i).addClass("col-selected");
}

function textareaChanged() {
    var el = $("#reason-input");
    var remaining = el.prop("maxLength") - el.val().length;
    if (el.val().length === 0) $("#reason-help").html("Maximum of " + remaining + " characters");
    else $("#reason-help").html(remaining + " characters left");
}

function submitNomination() {
    var el = $("#submit-nomination");
    el.prop("disabled", true);
    el.html("Submitting");
    setTimeout(function () {
        submitSuccessful();
    }, 3000);
}

function submitSuccessful() {
    var el = $("#submit-nomination");
    el.prop("disabled", false);
    el.html("Submit Nomination");
    el.hide();
    $("#submit-already").show();
    $("#attuid-input").val("");
    $("#reason-input").val("");
    already = true;
    categorySelected();
    textareaChanged();
}