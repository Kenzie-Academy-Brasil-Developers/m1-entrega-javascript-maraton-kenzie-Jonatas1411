let nomes = ['Rafael', 'Manoel', 'Daniel']

function position(competidores) {

    if (competidores.indexOf('Daniel') == 0) {

    } else if (competidores.indexOf('Daniel') == 0) {

    } else if (nomes.indexOf('Daniel') == 2) {
        let posicao1 = nomes[0]
        nomes[0] = nomes[2]
        nomes[2] = posicao1

        return console.log(`Daniel é o campeão! e este é o podio ${nomes}`)

    }
}
console.log(position(nomes))    