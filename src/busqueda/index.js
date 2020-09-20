const {Nodo} = require('./Nodo');
const {Prioridad} = require('./Prioridad');
const {ProblemaNodos} = require('./ProblemaNodos');

let maze = [[2, 1, 1], [2, 3, 3], [2, 3, 1], [1, 1, 1]]
let start = {
    pos : [3,0],
    cost : 0,
    parent : null,
    action : null,
}
//[3, 0]
let goal = [0, 2]
const OPERATORS = ["U", "D", "L", "R"] // Priotity in case

let problem = { maze, goal }

// Avoid come back
// root: {pos: [3, 0], cost: 0, parent: null, action: null}
// node: {pos: [x, y], cost: number, parent: node, action: string}

function testGoal(nodo, problem) {
    if (nodo.pos[0] == problem.goal[0] && nodo.pos[1] == problem.goal[1]) {
        return true;
    }
    return false;
}

function buscarEnExplorados(nodo, lista){
    for(var i=0; i<lista.length; i++){
        if(nodo.pos == lista[i].pos){
            return true
        } else{
            return false
        }
    }
}

function solve(problem, root) {
    let solution = [];
    let nodoRaiz = new Nodo(root)
    console.log(nodoRaiz)
    console.log(nodoRaiz.pos)
    let problema = new ProblemaNodos()
    prioridad = new Prioridad();
    explorados = [];
    prioridad.agregar(nodoRaiz);
    prioridad.getListaPrioridad()
    encontreMeta = false;
    while(!encontreMeta){
        if(!prioridad) return "no hay nodos para ser evaluados"
        let nodo = prioridad.extraerMenor()
        if(testGoal(nodo, problem)) return "encontré la meta" //prioridad.getListaPrioridad()
        explorados.push(nodo)
        //lista de acciones
        let listaAcciones = problema.acciones(problem, nodo);
        console.log(listaAcciones);
        for(var i = 0; i<listaAcciones.length; i++){
            let nodoHijo = problema.crearHijo(nodo, listaAcciones[i], problem);
            if(!buscarEnExplorados(nodoHijo, explorados) && !prioridad.buscarEnPrioridad(nodoHijo, explorados)){
                prioridad.agregar(nodoHijo)
            } else{
                nodoListaPrioridad = getNodoListaPrioridad(nodoHijo);
                if(nodoHijo.cost < nodoListaPrioridad.cost){
                    remplazarNodo(nodoHijo)
                }
            }
        }
        

        prioridad.getListaPrioridad()
        
    

    }
    
    return { solution }
}


console.log(solve(problem, start));