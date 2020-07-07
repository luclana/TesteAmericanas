<// / <reference types="Cypress" />

    table id="listaProdutos">
    
    beforeEach(() => {
        Given('que a tela de login é aberta', () => {
          cy.visit('/');
        });

    <thead>
        <tr>
            <th><div>Departamento</div><div><input id="filtro-departamento"/></div></th>
            <th>TipoDeProduto</th>
            <th>TodosOsDepartamentos</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>BrinquedosEBebes</td>
            <td>Jogos</td>
            <td>JogoUno</td>
        </tr>
        <tr>
            <td>CelularesETelefoniafixa</td>
            <td>TopModelos</td>
            <td>Iphone</td>
        </tr>
        <tr>
            <td>InformaticaETablets</td>
            <td>Notebook</td>
            <td>NotebookCompaqPresarioCQ32IntelPentium4GB120GBSSD14"W10</td>
        </tr>
        <tr>
            <td>MoveisEDecoracao</td>
            <td>Sofa</td>
            <td>SofaCama</td>
        </tr>
        <tr>
            <td>GamesLivrosEFilmes</td>
            <td>Ps4</td>
            <td>ControlePs4</td>
        </tr>
        <tr>
            <td>Eletroportateis</td>
            <td>Batedeira</td>
            <td>BatedeiraArno</td>
        </tr>
    </tbody>
</table>

var filtro = document.getElementById('filtro-departamento');
var tabela = document.getElementById('listaProdutos');
cy.filtro.onkeyup = function() {
    var nomeFiltro = filtro.value;
   cy.for (var i = 1; i < tabela.rows.length; i++) {
        var conteudoCelula = tabela.rows[i].cells[0].innerText;
        var corresponde = conteudoCelula.toLowerCase().indexOf(nomeDepartamento) >= 0;
        tabela.rows[i].style.display = corresponde ? '' : 'none';
    }
};