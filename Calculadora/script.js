let displayValue = ''; // Valor exibido no display
let memoryValue = 0;   // Valor armazenado na memória

// Função para limpar o display
function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

// Função para adicionar ao display
function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

// Função para calcular o resultado
function calculateResult() {
    try {
        const result = eval(displayValue); // Avalia a expressão no display
        displayValue = result.toString();  // Converte o resultado para string
        updateDisplay();
    } catch (error) {
        displayValue = 'Error'; // Se houver um erro na expressão, exibe 'Error'
        updateDisplay();
    }
}

// Função para atualizar o display com o valor atual
function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

// Função para adicionar ao valor na memória
function addToMemory() {
    memoryValue += parseFloat(displayValue);
}

// Função para subtrair do valor na memória
function subtractFromMemory() {
    memoryValue -= parseFloat(displayValue);
}

// Função para recuperar o valor da memória e exibi-lo no display
function recallMemory() {
    displayValue = memoryValue.toString();
    updateDisplay();
}

// Função para limpar o valor na memória
function clearMemory() {
    memoryValue = 0;
}

//
