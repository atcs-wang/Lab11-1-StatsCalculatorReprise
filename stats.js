function readAllNumbers() {
    var textArea = document.querySelector("textarea");
    var lines = textArea.value.split("\n");
    var numbers = [];
    //Step 4: update to handle multiple numbers on one line
    for (var i = 0; i < lines.length; i++) {
        if (lines[i] === "")
            continue;
        var num = Number(lines[i]);
        if (isNaN(num))
            continue;
        numbers.push(num);
    }
    return numbers;
}
function getMean(nums) {
    var sum = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var n = nums_1[_i];
        sum += n;
    }
    return sum / nums.length;
}
function getAboveBelowMean(nums) {
    var mean = getMean(nums);
    var aboveCount = 0;
    var belowCount = 0;
    for (var _i = 0, nums_2 = nums; _i < nums_2.length; _i++) {
        var n = nums_2[_i];
        if (n < mean)
            belowCount++;
        else if (n > mean)
            aboveCount++;
    }
    return [aboveCount, belowCount];
}
// PART A : Basic Stats
function getMedian(nums) {
    //Step 1
    return NaN; // remove me!
}
function getMinMax(nums) {
    //Step 2
    return [NaN, NaN]; // remove me!
}
function getStdDev(nums) {
    //Step 3
    return NaN; // remove me!
}
var basicStatsAnalyzeButton = document.querySelector("button#analyze");
basicStatsAnalyzeButton.addEventListener("click", function () {
    var numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#mean").textContent = "".concat(getMean(numbers));
    document.querySelector("#aboveBelow").textContent = "".concat(getAboveBelowMean(numbers).join(" & "));
    document.querySelector("#median").textContent = "".concat(getMedian(numbers));
    document.querySelector("#minMax").textContent = "".concat(getMinMax(numbers).join(" & "));
    document.querySelector("#stdDev").textContent = "".concat(getStdDev(numbers));
});
// PART B: Advanced Integer Stats
function getLeastCommonMultiple(nums) {
    return NaN; // remove me!
}
function getAllCommonFactors(nums) {
    return [NaN]; // remove me!
}
var advancedStatsAnalyzeButton = document.querySelector("button#analyze");
advancedStatsAnalyzeButton.addEventListener("click", function () {
    var numbers = readAllNumbers();
    //Note: Sorting numbers requires passing a custom comparison function to .sort()
    numbers.sort(function (a, b) { return a - b; });
    document.querySelector("#lcm").textContent = "".concat(getLeastCommonMultiple(numbers));
    document.querySelector("#factors").textContent = "".concat(getAllCommonFactors(numbers).join(", "));
});
