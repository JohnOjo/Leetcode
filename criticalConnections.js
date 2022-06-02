var criticalConnections = function(n, connections) {
    var b = []
    connections.forEach((connection, index) => {
        connections.forEach((connection2, index2) => {
            
            if (index !== index2) {
                console.log(index)
                var a = false
                if(connections.includes(connection2)) {
                    a = true
                }
                
                if(a){
                    b.push(connection2)
                }
                
            }
            });
    });
    console.log(b)
    return [connections[0]]
};

n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
//criticalConnections(n ,connections)