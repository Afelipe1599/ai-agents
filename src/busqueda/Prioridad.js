const Nodo = require('./Nodo');

class Prioridad {
    constructor(){
        this.listaPrioridad = [];    
    };
    
    ordenarListaPrioridad = (comparador) =>
        (oneNode, nextNode) => oneNode[comparador] == nextNode[comparador] ? 0 : oneNode[comparador]  < nextNode[comparador] ? -1 : 1
        
    

    agregar(nodo) {
        if(!this.listaPrioridad){
            this.listaPrioridad.push(nodo);
        }else{
            this.listaPrioridad.push(nodo);
            this.listaPrioridad.sort(this.ordenarListaPrioridad('cost'));
        }
    }

    extraerMenor(){
        return this.listaPrioridad.pop()
    }

    getListaPrioridad(){
        for(var i=0;i<this.listaPrioridad.length; i++){
            console.log(this.listaPrioridad[i].pos)
        };
    }

    buscarEnPrioridad(nodo){       
        for(var i=0;i<this.listaPrioridad.length; i++){
            if(nodo.pos == this.listaPrioridad[i].pos){
                return true
            }else{
                return false
            }
        }
    }

    getNodoListaPrioridad(nodo){
        for(var i=0;i<this.listaPrioridad.length; i++){
            if(nodo.pos == this.listaPrioridad[i].pos){
                return this.listaPrioridad[i]
            }
        }
    }

    remplazarNodo(nodo){
        for(var i=0;i<this.listaPrioridad.length; i++){
            if(nodo.pos == this.listaPrioridad[i].pos){
                this.listaPrioridad.splice(i,1,nodo)
            }
        }
    }
}




module.exports = {Prioridad};