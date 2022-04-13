let results; 
$.ajax({
    type: 'GET',
    url: 'http://127.0.0.1:5000/licence',
    success: function(response) {
      results = response
    },
    async: false
  });

console.log("data:", results)
const data = {
    labels: results.labels,
    datasets: [
        {
            label: 'Licenses',
            data: results.data,
        },
    ],
};