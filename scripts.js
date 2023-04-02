class itemRegister {
    constructor(itens, qtd, createOrderofService) { //valueTotal) {
    this.itens = itens;
    this.qtd = qtd;
    this.createOrderofService = createOrderofService;
    // this.valueTotal

    }

    addItem(item) {                //Adiciona itens no estoque
    
        let contador = 0;

        for(let stockItens in this.itens) {
            if(this.itens[stockItens].name == item.name) {
            this.itens[stockitens].qtd += item.qtd
             contador = 1;
        }
        }

    if(contador == 0) {
        this.itens.push(item);
    }

    this.qtd += item.qtd;
   // this.valueTotal += item1.preco * item1.qtd;
    }

    removeItem(item1){              //Remove os Itens do estoque

        for(let stockItens in this.itens) {
            if(this.itens[stockItens].name == item1.name && this.itens[stockItens].qtd <= item1.qtd ) {
            
                let obj = this.itens[stockItens];
                let index = this.itens.findIndex(function(obj) {return obj.name == item1.name}); 
                
                 this.qtd -= this.itens[stockItens].qtd;
                //this.valueTotal -= this.itens[itemcart].preco * this.itens[itemcart].qtd;

                this.itens.splice(index, 1);
            
            } else if (this.itens[stockItens].name == item1.name && this.itens[stockItens].qtd > item1.qtd) {

                this.itens[stockItens].qtd -= item1.qtd
                this.qtd -= item1.qtd

            }
        }
    }
    
    searchItens(itenS) {        //Usado para pesquisar itens e virificar se estão presentes no sistema ou não.
        
        for(let searchItens in this.itens) {
            if(this.itens[searchItens].name == itenS.name && this.itens[searchItens].qtd > 0) {
                console.log(`Possuimos ${this.itens[searchItens].qtd} unidades do item ${itenS.name}`);
            } else if (this.itens[searchItens].name != itenS.name && this.itens[searchItens].qtd <= 0) {
                console.log("Não possuimos este item no estoque");
            }
        }
    }
        
//    createOs(itensS) {     /Metodo em CONSTRUÇÂO(Mas basicamente é criação de ordem de compra)
//        for(let createOS in this.itens) {
//            if(this.itens[createOS].name == itensS.name && this.itens[createOS].qtd > itensS.qtd) { 
//                this.createOrderofService += itensS.code;
//               this.createOrderofService += itensS.name;          
//                this.createOrderofService += itensS.qtd;                          
//               this.createOrderofService += itensS.price;                     
//                }
//            
//            this.itens[createOS].qtd -= itensS.qtd
//            this.qtd -= itensS.qtd  
//        }
//    }
}

let stock = new itemRegister ([
    {
        code: 0001,
        name: "Controle XBOX S",
        qtd: 1,
        price: 424.00
    }
], 1, [
    {
        code:undefined,
        name: undefined,
        qtd: undefined,
        price:undefined
    }
]
)

