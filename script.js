// //esercizio1

// let Io = {
//     nome : "Giovammi",
//     cognome : "Miglio",
//     eta : 36,
//     saluta(){
//     console.log(`Ciao a tutti sono ${this.nome} ${this.cognome} e ho ${this.eta} anni`)
//     }
// }
// Io.saluta();


//esercizio2
// let rubrica = {
//     contatti: [
//         {nome: 'Nicola', telefono: '3331111111'},
//         {nome: 'Lorenzo', telefono: '3332222222'},
//         {nome: 'Paola', telefono: '3333333333'},
//         {nome: 'Jenny', telefono: '3334444444'}
//     ],
//     allcont(){
//         console.log("contattirubrica");
//         this.contatti.forEach((contatto,i)=>console.log(`${i + 1}. ${contatto.nome}.${contatto.telefono}`));

//     },
//     contact(nome){
//         let contatto = this.contatti.find( c=> c.nome === nome);
//         if(contatto){
//             console.log(`${contatto.nome} - ${contatto.telefono} `);

//         }else{console.log(`Contatto "${nome}" non trovato nella rubrica.`);
//     }
// },
// rimuovicont(nome){
//     let i = this.contatti.findIndex(c=> c.nome === nome)
//     if ( i !== -1 ){
//         this.contatti.splice(i,1);
//         console.log(`${nome} rimosso`);       
//     }else {
    //         console.log(`${nome} non presente rubrica`);

//     }
// },
// aggiungicont(nome, telefono){
//     this.contatti.push({nome,telefono})
//     console.log(`${nome} aggiunto in rubrica`);
// },
// modcontatto(nome,nuovonome,nuovonumero){
//     let i = this.contatti.findIndex(c=> c.nome === nome)
//     if ( i !== -1 ){
//         this.contatti[i].nome = nuovonome
//         this.contatti[i].telefono = nuovonumero
//         console.log(`${nome}cambiato in ${nuovonome} con il numero ${nuovonumero} `);

//     }else{
    //         console.log(`${nome} non trovato in rubrica`);

//     }
// }
// }
// rubrica.allcont();
// rubrica.contact("Jenny");
// rubrica.rimuovicont("Paola");
// rubrica.rimuovicont("Luca");
// rubrica.aggiungicont("Pietro","3333233234");
// console.log(rubrica);
// rubrica.modcontatto("Nicola", "Nico", "3339999999");


//esercizio 3
let bowling = {
    players : [
        {name: 'Livio', scores: []},
        {name: 'Paola', scores: []},
        {name: 'Filippo', scores: []},
        {name: 'Giuseppe', scores: []}
    ],
    assegnapunti : function() {
        this.players.forEach(player =>{  for (let i = 0; i < 10; i++)
            {let score= Math.floor(Math.random() * (10 - 1 +1) + 1);
                player.scores.push(score);
                
            }})},
            scoretot: function tot(scoretot) {
                this.players.forEach(player=>{
                    let totale = player.scores.reduce((a,b) => a+b ,0);
                    player.totalScore = totale;});
                    
                },
                
                
                maxscoreorder:function maxsccore(scoreorder) {
                    
                    this.players.sort( (a,b)=> b.totalScore - a.totalScore)      
                }
            }
            
            bowling.players.push({name: "Giorgio", scores:[]});
            bowling.assegnapunti();
            bowling.scoretot();
            bowling.maxscoreorder();
            console.log(bowling);
            let vincitore = bowling.players[0].totalScore
            bowling.players.forEach(player => {
                console.log(`${player.name}: ha fatto ${player.totalScore} punti`)
                if (player.totalScore === vincitore) {
                    console.log(`${player.name} ha vinto!`);
                    
                    
                } else { console.log(`${player.name} ha perso!`);
                
            }});
            console.log(`${bowling.players[0].name} complimeti Hai vinto il torneo con ben ${vincitore} punti !`);
            
            
        
        
        