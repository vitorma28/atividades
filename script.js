const Array1 = ['Ford', 'Renault', 'Fiat', 'Chevrolet', 'Volkswagen',
                'Peugeot', 'Citroen', 'Toyota', 'Hyundai', 'Nissan'];

const Array2 = ['Fusion', 'Sandero', 'Siena', 'Equinox', 'Jetta', '3008',
                'Xsara', 'Corolla', 'Creta', 'Frontier'];

const Array3 = ['R$ 85.000,00', 'R$ 35.000,00', 'R$ 35.0000,00',
                'R$ 170.000,00', 'R$ 95.000,00', 'R$ 94.000,00',
                'R$ 45.000,00', 'R$ 75.000,00', 'R$ 85.000,00', 'R$ 105.000,00']
;

const tbody = document.getElementById('tabela');


for (let i = 0; i < Array1.length; i++) {
    adicionarÀTabela(Array1[i], Array2[i], Array3[i]);
}


function adicionarÀTabela(marca, modelo, valor) {
    tbody.innerHTML += `
<tr>
    <td>${marca}</td>
    <td>${modelo}</td>
    <td>${valor}</td>
</tr>
    `;
}
