// node: {pos: [x, y], cost: number, parent: node, action: string}

class Nodo {
    constructor(data) {
        if (data == null){
            this.pos = [0,0];
            this.cost = 0;
            this.parent = null;
            this.action = null
        } else{
            this.pos = data.pos;
            this.cost = data.cost;
            this.parent = data.parent;
            this.action = data.action
        }
        
    };

    getPos(){
        return this.pos
    }

    getCost(){
        return this.cost
    }
    
    getParent(){
        return this.parent
    }

    getAction(){
        return this.action
    }


}

module.exports = {Nodo};
