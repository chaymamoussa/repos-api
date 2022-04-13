var labels, values;
$.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5000/licence',
    success: function(response) {
        labels = response.labels
        values = response.data
    },
    async: false
});

var colors = [];
var dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
};

for (var i in values) {
    colors.push(dynamicColors())
}
 
const data = {
    labels: labels,
    datasets: [
        {
            label: 'Licenses',
            data: values,
            backgroundColor: colors
        },
    ],
};