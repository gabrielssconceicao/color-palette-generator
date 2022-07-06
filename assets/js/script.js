class Paleta{
    
    constructor(){
        this.pallete = document.querySelector(".pallete")
    }

    gerarPaleta(){
        const paleta = this.criarPaleta();
        for(let el of paleta){
            this.pallete.appendChild(el)
        }
    }

    criarPaleta(){
        const paleta = [];
        for(let i=0; i<5; i++){

            const cor = this.gerarCor();
            const elemento = this.criarElemento(cor);
            paleta.push(elemento)
        }    
        return paleta;         
    }

    gerarCor(){
        const codCor = "0123456789abcdef";
        let cor = "";
        for(let i=0; i<6; i++){
            cor += codCor[this.randon()];           
        }
        return cor;
    }

    randon(){
        const num = Math.floor(Math.random() * 16);
        return num
    }

    
    criarElemento(cor){
        /*
         <div class="color">
         <span class="color-name">a</span>
         </div>
        */
        const span = this.criaSpan(cor);
        const div = document.createElement('div');
        div.classList.add('color');
        div.style.backgroundColor = `#${cor}`
        div.appendChild(span);
        return div;
    }

    criaSpan(cor){
        const span = document.createElement('span');
        span.classList.add('color-name');
        span.innerHTML = `#${cor}`;
        return span;
    }

}


const paletaGerada = new Paleta();
window.onload = paletaGerada.gerarPaleta();