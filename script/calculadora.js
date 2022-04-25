// function  factory  (função fabrica) 

function criaCalculadora(){ //ela vai retorna um objeto
    return{
        // Tudo que for atributo ficara aqui
        // selecionando o display
        display: document.querySelector('.display'),
      

        // para iniciar a calculadora
        inicia(){ //tudo aue for metodo ficara abaixo
            alert('Oi, Iniciando...')
            // agora preciso iniciar os clique dos botoes
            this.cliqueDosBotoes()
        },

        // metodo de limpar o campo.
        ClearDisplay(){
            this.display.value=''
        },
        // metodo para apagar um numero  por vez do campo campo.
        apagaum(){
            this.display.value = this.display.value.slice(0,-1)
        },
        // metodo somar valor.
        fazerCalculo(){
            let conta = this.display.value;
            try{
                // eval faz o calculo dos numeros.
               conta = eval(conta);
               if(!conta){
                   alert('Conta Invalida...')
                   return
               }
               this.display.value = String(conta)
            }catch(e){
                alert('conta Invalida')
                return;
            }
        },
        // ele sera responsavel por pegar os clique da calculadora
        cliqueDosBotoes(){
            document.addEventListener('click', function(e){
                let el = e.target //aqui mostra o que estou clicando na pagina
                if(el.classList.contains('btn-num')){
                   this.btnParaDisplay(el.innerText)
                }

                // verificar se o botao clear foi apertado
                if(el.classList.contains('btn-clear')){
                    this.ClearDisplay()
                }

                // função para apagar apenas um digito
                if(el.classList.contains('btn-del')){
                    this.apagaum();
                }
                // função de somar o valor
                if(el.classList.contains('btn-eq')){
                    this.fazerCalculo()
                }
            }.bind(this))

        },
        // chamando o btnDisplay para enviar o numero para tela
        btnParaDisplay(valor){
        this.display.value += valor
        }
    }
}

const calculadora = criaCalculadora();

calculadora.inicia()