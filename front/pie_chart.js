const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Repartition des repos Github selon le type de licence'
            }
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
