//Chapter 7 Project: A Robot

const roads = [
    "Alice's House-Bob's House"
    , "Alice's House-Cabin"
    , "Alice's House-Post Office"
    , "Bob's House-Town Hall"
    , "Daria's House-Ernie's House"
    , "Daria's House-Town Hall"
    , "Ernie's House-Grete's House"
    , "Grete's House-Farm"
    , "Grete's House-Shop"
    , "Marketplace-Farm"
    , "Marketplace-Post Office"
    , "Marketplace-Shop"
    , "Marketplace-Town Hall"
    , "Shop-Town Hall"
];

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from , to) {
    if(graph[from] == null) {
        graph[from] = [to];
    } else {
        graph[from].push(to);
    }
    }

    for(let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);
const mailRoute = [
    "Alice's House"
    , "Cabin"
    , "Alice's House"
    , "Bob's House"
    , "Town Hall"
    , "Daria's House"
    , "Ernie's House"
    , "Grete's House"
    , "Shop"
    , "Grete's House"
    , "Farm"
    , "Marketplace"
    , "Post Office"
]

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    static random(parcelCount = 5) {
        let parcels = [];
        for(let i = 0; i < parcelCount; i++) {
            let address = randomPick(Object.keys(roadGraph));
            let place;
            do {
                place = randomPick(Object.keys(roadGraph));
            } while (place == address);
            parcels.push({place, address});
        }
        return new VillageState("Post Office", parcels);
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function runRobot(state, robot, memory) {
    for(let turn = 0;; turn++) {
        if(state.parcels.length == 0) {
            //console.log(`Done in ${turn} turns`);
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        //console.log(`Moved to ${action.direction}`);
    }
}


function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

function routeRobot(state, memory = []) {
    if(memory.length == 0) {
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];

    for(let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for(let place of graph[at]) {
            if(place == to) {
                //console.log(work);
                return route.concat(place);
            }
            if(!work.some(w => w.at == place)) {
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientedRobot({place, parcels}, route = []) {
    if(route.length == 0) {
        let parcel = parcels[0];
        if(parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

//console.log(roadGraph);
//console.log(findRoute(roadGraph, "Alice's House", "Shop"));

//runRobot(VillageState.random(), routeRobot);
//let r = runRobot(VillageState.random(), goalOrientedRobot);
//console.log(`Done in ${r} turns`);



/**********
Exercises
**********/
//measuring a robot
function compareRobots(robot1, robot2, numTasks = 100) {
    //track how many steps to finish each task
    r1Log = [];
    r2Log = [];

    for(i = 0; i < numTasks; i++) {
        let village = VillageState.random();

        //runRobot function modified to return number of steps to complete
        r1Log.push(runRobot(village, robot1));
        r2Log.push(runRobot(village, robot2));
    }

    let r1Avg = r1Log.reduce((a, b) => a + b) / r1Log.length;
    let r2Avg = r2Log.reduce((a, b) => a + b) / r2Log.length;

    console.log(`Robot 1 Average: ${r1Avg}`);
    console.log(`Robot 2 Average: ${r2Avg}`);
}

compareRobots(routeRobot, goalOrientedRobot);

