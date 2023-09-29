//Definido a classe calculadora
class Calculadora{
    constructor(){
        this.valor = '0'
    }

    //metodo para a(adicionar um numero no visor
    adicionarNumero(numero){
        if (this.valor === '0'){
            //se o valor atual for 0 vai substituir
            this.valor = numero
        } else{
            //senao, adiciona o  numero no final do valor atual 
            this.valor += numero
        }
        //atualiza o valor 
        this.atualizarVisor()
    }

    //metodo para adicionar operacao no visor 
    adicionarOperacao(operacao){
        if(
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '/'
        ){
            //se o ultimo caractere do valor atual for uma operacao, substitui essa operacao pela nova operacao
            this.valor = this.valor.slice(0, -1) + operacao 
        } else {
            //senao, adiciona a operacao
            this.valor += operacao

        }
        //atualiza o visor 
        this.atualizarVisor()
    }

    limpar(){
        //metodo para limpar o visor
        this.valor = '0'
        this.atualizarVisor()
    }

    resultado(){
        try{
            //usa a funcao eval() para calcular o resultado da expressao no visor
            this.valor = eval(this.valor).toString()
        } catch(e){
            this.valor = 'Erro'
            //se houver um erro na expressao, exibe a mensagem de erro
        }
        this.atualizarVisor()

        }
    //metodo para atualizar o visor com o valor atual da calculadora
        atualizarVisor(){
            document.getElementById('visor').value = this.valor
        }
}
// criando um objeto calculadora da classe calculadora
let calculadora = new Calculadora();
