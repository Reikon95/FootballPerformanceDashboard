module.exports = {
    test: test,
    getTeam: getTeam
}
function test() {
    return [
        {id: 1, name: 'Arsenal'},
        {id: 2, name: 'Chelsea'},
        {id: 3, name: 'Aston Villa'},
        {id: 4, name: 'Liverpool'},
        {id: 5, name: 'Norwich'}
    ];
}

function getTeam(id) {
    let teams = test();
    return teams.filter(team => team.id === id);
}