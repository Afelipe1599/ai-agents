const Problem = require('../core/Problem');
const {Nodo} = require('./Nodo');

/**
 * Simple reflex agent problem. Define a problem to be solved by a simple reflex agent 
 */
class ProblemaNodos extends Problem {
    constructor(args) {
        super(args);
        this.env = args;
    }

    /**
     * Check if the given solution solves the problem. You must override.
     * The current state of the enviroment is maintained in data.world
     * @param {Object} solution 
     */
    /*testGoal(nodo, problem) {
        let pos = nodo
        console.log(pos)
        if (nodo.pos[0] == problem.goal[0] && nodo.pos[1] == problem.goal[1]) {
            return true;
        }
        return false;
    }*/

    /**
     * The transition model. 
     * Tells how to change the state (data) based on the given actions. You must override
     * In this case, the actions can be one the four movements or the TAKE action.
     * In this case, what changes based on the movement actions is the x or y position of the agent
     * or the current cell if the action is TAKE
     * @param {} data 
     * @param {*} action 
     * @param {*} agentID 
     */
    crearHijo(nodo, accion, problem) {
        let mapa = problem.maze;
        let nodoPosX = nodo.pos[0];
        let nodoPosY = nodo.pos[1];
        let nodoHijo = new Nodo(null);
        nodoHijo.parent = nodo
        nodoHijo.action = accion
        if (accion == 'U') {
            nodoHijo.pos[0] = nodo.pos[0] - 1;
        }
        if (accion == "D") {
            nodoHijo.pos[0] = nodo.pos[0] + 1;
        }
        if (accion == "L") {
            nodoHijo.pos[1] = nodo.pos[0] - 1;
        }
        if (accion == "R") {
            nodoHijo.pos[1] = nodo.pos[0] + 1;
        }
        nodoHijo.cost = mapa[nodoHijo.pos[0]][nodoHijo[1]]
        return nodoHijo
    }

    expandir(listaAcciones,nodo, problem){
        listaNodosHijos = []
        for(var i = 0; i<listaAcciones.length;i++){
            listaNodosHijos.push(this.expandirHijo(nodo, listaAcciones[i],problem));
        }
        return listaNodosHijos
    }

    /**
     * Gives the world representation for the agent at the current stage.
     * Notice that the agent don't have access to the whole labyrinth. It only "see"
     * the cell around and under it. 
     * @param {*} agentID 
     * @returns and object with the information to be sent to the agent
     */
    acciones(problem, nodo){
        let mapa = problem.maze;
        let x = nodo.pos[0];
        let y = nodo.pos[1];
        let result = [];
    
        //UP
        result.push(x > 0 ? 'U': 0);
        //DOWN
        result.push(x = 0 || x < mapa[0].length - 1 ? 'D' : 0);
        //LEFT
        result.push(y > 0 ? 'L': 0);
        //RIGTH
        result.push(y = 0 || y < mapa[1].length - 1 ? 'R' : 0);
        
    
        return result;
    } 

    /**
     * Solve the given problem. We don't need to change in this case
     * @param {*} problem 
     * @param {*} callbacks 
     */
    /*solve(problem, callbacks) {
        this.controller.setup({ world: problem, problem: this });
        this.controller.start(callbacks);
    }*/
}

module.exports = {ProblemaNodos};