class Paleta{
    
    gerarPaleta(){
        const paleta = this.criarPaleta();
    }

    criarPaleta(){
        const paleta = [];
        for(let i=0; i<5; i++){

            const cor = this.gerarCor();
            const elemento = this.criarElemento(cor);

        }   
          
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
        
    }


}


const paletaGerada = new Paleta();
console.dir(paletaGerada);
paletaGerada.criarPaleta()
//window.onload = gerarPaleta(); 