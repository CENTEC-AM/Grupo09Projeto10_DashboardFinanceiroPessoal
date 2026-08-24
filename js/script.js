document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('graficoDespesasEstatico').getContext('2d');

    const dadosSimulados = {
        labels: ['Moradia', 'Alimentação', 'Energia', 'Transporte', 'Lazer', 'Cartão de Crédito'],
        datasets: [{
            label: 'R$ Gastos',
            data: [700, 550, 250, 200, 200, 500], 
            backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'],
            hoverOffset: 10,
            borderWidth: 2,
            borderColor: '#ffffff'
        }]
    };

    const configuracao = {
        type: 'doughnut',
        data: dadosSimulados,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { padding: 20, font: { size: 14 } } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed !== null) {
                                label += new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(context.parsed);
                            }
                            return label;
                        }
                    }
                }
            }
        }
    };

    new Chart(ctx, configuracao);
});