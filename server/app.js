// importação de dependência(s)
import express from 'express'
import fs from 'fs'
import map from 'underscore/modules/map.js'

// variáveis globais deste módulo
const app = express()
const PORT = 3000
const db = {}


// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 1-4 linhas de código (você deve usar o módulo de filesystem (fs))
db.jogadores = JSON.parse(fs.readFileSync('./server/data/jogadores.json'))
db.jogosPorJogadores = JSON.parse(fs.readFileSync('./server/data/jogosPorJogador.json'))

// configurar qual templating engine usar. Sugestão: hbs (handlebars)
//app.set('view engine', '???qual-templating-engine???');
//app.set('views', '???caminho-ate-pasta???');
// dica: 2 linhas
app.set('view engine', 'hbs');
app.set('views', './server/views');

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json (~3 linhas)
app.get('/', (req, res) => {
    res.render('index', db.jogadores)
})


// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter ~15 linhas de código
app.get('/jogador/:numero_identificador', (req, res) => {
    //TODO
    // var desteJogador = req.params.numero_identificador
    // var jogosDesteJogador = _.find(jogadores.players, function(el) {
    //     return el.steamid === desteJogador;
    // });
    // var naoJogados = _.where(desteJogador, { playtime_forever: 0 });
    // var ordenadoDesc = _.sortBy(playtime_forever, function(el) {
    //     return -el;
    // });
    // var primeiros5 = _.first(ordenadoDesc.reverse, 5);
    // var calculados = {
    //     naoJogados,
    //     ordenadoDesc,
    //     primeiros5
    // }
    // res.render('jogador', {
    //     profile: desteJogador,
    //     gameInfo: jogosDesteJogador,
    //     favorito: primeiros5[0]
    // })
})

// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código
app.use(express.static("./client"))

// abrir servidor na porta 3000 (constante PORT)
// dica: 1-3 linhas de código
app.listen(PORT, (() => {
    console.log('Escutando em: http://localhost:3000/')
}))