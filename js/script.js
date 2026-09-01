


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
// HISTÓRICO DE TRANSAÇÕES PARA RECEITA E DESPESA

const formulario = document.getElementById("form-transacao");
const listaHistorico = document.getElementById("lista-historico");

let transacoes = JSON.parse(localStorage.getItem("transacoes")) || [];

formulario.addEventListener("submit", function(event) {
    

    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);

    const tipo = document.querySelector(
        'input[name="tipo-transacao"]:checked'
     );

    if (descricao === "" || isNaN(valor) || !tipo) {
        alert("Preencha todos os campos!");
        return;
     }

    const transacao = {
        descricao: descricao,
        valor: valor,
        tipo: tipo.value
       };

    transacoes.push(transacao);

    localStorage.setItem(
        "transacoes",
        JSON.stringify(transacoes)
      );

    mostrarHistorico();
    atualizarSaldo();

    formulario.reset();
    });


function mostrarHistorico() {

    listaHistorico.innerHTML = "";

    if (transacoes.length === 0) {

        listaHistorico.innerHTML = `
            <li class="list-group-item text-muted">
                Nenhuma transação ainda...
            </li>
        `;

        return;
       }
       const transacoesOrdenadas = [...transacoes].sort((a, b) => {
    if (a.tipo === "receita" && b.tipo !== "receita") return -1;
    if (a.tipo !== "receita" && b.tipo === "receita") return 1;
    return 0;
});

transacoesOrdenadas.forEach(function(transacao) {
    // cálculo...
    const item = document.createElement("li");
        item.className =
            "list-group-item d-flex justify-content-between";

        const sinal =
            transacao.tipo === "receita" ? "+" : "-";

        item.innerHTML = `
            <span>${transacao.descricao}</span>
            <strong>
                ${sinal} R$ ${transacao.valor.toFixed(2)}
            </strong>
        `;

        listaHistorico.appendChild(item);
         });
   }

mostrarHistorico();
function atualizarSaldo() {
    let saldo = 0;

    transacoes.forEach(function(transacao) {
        if (transacao.tipo === "receita") {
            saldo += transacao.valor;
        } else {
            saldo -= transacao.valor;
        }
    });

    let visorSaldo = document.getElementById("visor-saldo");

    visorSaldo.textContent =
        "R$ " + saldo.toFixed(2).replace(".", ",");

    if (saldo < 0) {
        visorSaldo.classList.remove("text-success");
        visorSaldo.classList.add("text-danger");
    } else {
        visorSaldo.classList.remove("text-danger");
        visorSaldo.classList.add("text-success");
    }
}

atualizarSaldo();
