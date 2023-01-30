const ctx = document.getElementById('barchart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['C#', 'C++', 'CSS', 'Rust', 'Java', 'Kotlin', 'Elixir', 'Golang', 'Python', 'JavaScript', 'CoffeeScript'],
      datasets: [{
        label: 'Language',
        data: [27, 25, 48, 12, 85, 56, 15, 15, 78, 57, 8],
        borderWidth: 2,
        backgroundColor: [
        'rgba(40, 115, 20, 10)'
        ],
        borderRadius: 12,
      }]
    },
    options: {
        hoverBorderRadius: 5,
        indexAxis: 'x',
        scales: {
            y: {
                ticks: {
                    color: 'rgba(128, 255, 128, 0.8)'
                }
            },
            x: {
                ticks: {
                    color: 'rgba(128, 255, 128, 0.8)'
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: 'true',
                    pointStyle: 'rect',
                    color: 'rgba(128, 255, 128, 0.8)',
                }
            }
        }
    }
  });
