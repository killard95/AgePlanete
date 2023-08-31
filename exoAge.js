
function get_age() {

    let planet = document.getElementById("myPlanet").value;
    let age = document.getElementById('input').value;
    my_age = age*3600*24*365.25;
    let planetes = {
        "terre":365.25,
        "mercure":0.2408467,
        "venus":0.61519726,
        "mars":1.8808158,
        "jupiter":11.862615,
        "saturne":29.447498,
        "uranus":84.016846,
        "neptune":164.79132
    };
    let result = (Math.floor(my_age/3600/24/planetes[planet]));


    document.getElementById('age').innerHTML = `Vous avez ${result} ans sur la planète ${planet} !`;

}

let somme = 0;
let prod = 1;
let montab = [1, 2, 3, 4, 5, 6, 7, 8];
for ( let i=0 ; i<montab.length ; i++ ) {
    somme += montab[i];
    prod *= montab[i];
}
console.log(`somme de tous les éléments = ${somme} / produit de tous les éléments = ${prod} .`);


let $tabcolor = [ "red", "green", "white", "pink", "black", "yellow" ];

function transfo($tab, $sep) {
    let $finalString = "" ;
    for ( let i=0 ; i<$tab.length ; i++ ) {
     
     if (i == $tab.length - 1) {
        $finalString += $tab[i];
     } else {
        $finalString += $tab[i]+$sep;
     }
    }
    return $finalString;
}
let $result = transfo($tabcolor, " and ");
console.log($result);


let $machaine = 'kjhd2hjh4jh98';
let $splitted = $machaine.split("");
let $sum = 0;


    for ( let i = 0 ; i < $splitted.length ; i++ ) {
        let $machaine2 = parseInt($splitted[i])
        if (isNaN($machaine2) === true ) {
         ;
        } else {
            $sum += $machaine2;
        }
    }
    console.log($sum);


    // Determiner si un entier passé en argument est multiple de 7 ou 11
    function modulo() {
        let $nombre = document.getElementById("modulo").value;
        let $reponse = "";

        if ($nombre % 7 == 0 || $nombre % 11 == 0) {
            $reponse = `${$nombre} est un multiple de 7 ou 11`;
        } else {
            $reponse = `${$nombre} n'est ni un multiple de 7 ni un multiple de 11 .`;
        }
        document.getElementById("reponse_modulo").innerHTML = $reponse;
    }



// Ecrire une fonction pour calculer la difference entre un nombre donné et 13 :
// si le nombre est supérieur à 13, on retourne le double de la différence , sinon on retourne la différence seule

function diff() {
    let $nombre_diff_13 = document.getElementById("diff13").value;
    let $difference_avec_13 = "";
    let $limit = 13;

    if ( $nombre_diff_13 < $limit ) {
        $difference_avec_13 = `Vous avez entrer un nombre inférieur à ${$limit}, la différence est `+ ($limit - $nombre_diff_13); 
    } else if ( $nombre_diff_13 > $limit ) {
        $difference_avec_13 = `Vous avez entrer un nombre supérieur à ${$limit}. Le résultat de la différence multiplié par 2 est ` + (2 * ( $nombre_diff_13 - $limit ));
    } else {
        $difference_avec_13 = `Vous avez entrer le nombre ${$limit}`;
    }
    document.getElementById("reponse_diff").innerHTML = `${$difference_avec_13}`;
}



// soient 2 tableaux de meme longueur : parcourir les valeurs de chacun d'eux en ordre inverse :
//  ascendant pour A et descentdant pour B (en n'utilisant qu'une seule boucle evidemment !)
   

function tab() {
let $A = [ 1, 2, 3, 4, 5 ];
let $B = [ "a", "b", "c", "d", "e" ].reverse();
let $tableauA = [];
let $tableauB = [];

    for ( let i = $A.length - 1 ; i >= 0 ; i-- ) {
        if (i == 0) {
            $tableauA += $A[i];
            $tableauB += $B[i];
        } else {
            $tableauA += $A[i] + "-";
            $tableauB += $B[i] + "-";
        }
    }
    document.getElementById("tableau").innerHTML = `Tableau A en ordre descendant : ${$tableauA} <br>
     Tableau B en ordre ascendant : ${$tableauB}`;
}




function nbCroissant (nb) {
nb += "" ;
let tab = nb.split("");
    for (i = 1 ; i < tab.length ; i ++) {
        if (parseInt(tab[i-1]) > parseInt(tab[i])){
        return false;
        } 
     }
     return true;
}

let test = 123
let test2 = 321
 console.log(test, nbCroissant(test))
 console.log(test2, nbCroissant(test2))


//  écrire une fonction JS pour supprimmer tous les caractères qui reviennent plus d'une fois dans une chaine
//  
// function clean (str) {
//     let json = {};
//     let tab_string = str.split();
//     for ( i=0; i < tab_string.length ; i++){

      
        
//     }

// }
// let str1 = "12EDCFG245";
// let str2 = "zqgh24354sfdg";
// console.log(str1, clean(str1));
// console.log(str2, clean(str2));




let str1 = "12edcfg2451";
// envoi chaque caractére de la chaine dans le tableau_str
let tableau_str = str1.split("");
let resultat = "";
// fonction pour enlever les doublons
function index(string){
    // boucle sur l'ensemble du tableau
    for (i=0 ; i< tableau_str.length ; i ++) {
        // indique l'index du 1er caractére
        let char_debut = string.indexOf(tableau_str[i]);
        // indique l'index du dernier caractére
        let char_fin = string.lastIndexOf(tableau_str[i]);
        // Si les deux index sont identique on les ajoute dans la variable resultat
        if ( char_debut == char_fin ){
            resultat += tableau_str[i]; 
        } 
    }
    return resultat ;
}
console.log(index(str1));



var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

    for ( index = 0 ; index < library.length ; index++ ){
    // console.log(library[index].author);
    // library[index].index = `N° ${index}` ;
    let newname = `index ${index}`
    library[index][newname] = `truc`;
}
console.log(library[2].libraryID);



// let multidim_arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// console.log(multidim_arr[2][1]);
// multidim_arr[0][1] = ["toto","tata"];
// console.log(multidim_arr);

    

let arr1 = [['1','2','3'], 24, 18000];
let arr2 = ["EFG", 30, [[1,2],[3,4],[5,6]]];
let arr3 = ["IJK", 28, 41000];
let arr4 = ["EFG", [['A','B'],['C','D']], 28000];
let arr5 = ["EFG", arr3, 35000];
let complex = [arr1, arr2, arr3, arr4, arr5];

function loop(tableau){
    for ( let i=0 ; i < tableau.length ; i++ ){
        if (Array.isArray(tableau[i])) {
            loop(tableau[i]);
        }else {
            console.log(tableau[i]);
        }
    }
}
loop(complex);



// Calculer les années dont le 1er Janvier est un dimanche , entre les années 2000 et 2050
// tip : on utilisera l'objet Date et la méthode associée Date.getDay()
let date = new Date(0);
let count = 0
for ( i = 2000 ; i <= 2050 ; i++ ) {
        date.setFullYear(i);
    if ( date.getDay() == 0 ) {
        count += 1;
    }
}
console.log(count);



// Concevoir une fonction qui convertit les temperatures entre ° celsius et fahrenheit
// tip : c/5 = (f-32)/9 -> exprimer l'un en fonction de l'autre
// (1 * 9/5) + 32  celsius en farenheit
// (1 - 32) * 5/9   farenheit en celsius
let degre_c = 10;
let degre_f = 50;
let conv_c_to_f = (degre_c * (9/5)) + 32;
let conv_f_to_c = (degre_f - 32) * (5 / 9);
console.log(conv_f_to_c);
console.log(conv_c_to_f)


// Remplacer chaque caractère dans une chaine par son suivant dans l'alphabet
// ex :  char_push("bonjour") retourne "cpokpvs"
let ordered_str = "Hello les everybody";
let new_str = "";
for ( let i = 0 ; i < ordered_str.length ; i++ ) {
    new_str += String.fromCharCode((ordered_str[i].charCodeAt())+1);
}
console.log(new_str);


// un nombre joyeux est un nombre qui répond aux normes suivantes :
// on remplace le nombre par la somme des carrés de chacun de ses chiffres ,
// et on continue jusqu'a obtenir 1 ou qu'il repete une sequence infinie .
// Ceux dont la sequence finit avec 1 sont déclarés joyeux, les autres sont des nombres tristes ...
// Implémentez la fonction JS pour trouver les 5 premiers nombres joyeux

 


// les nombres d'Armstrong : trouvez tous les nombres d'Armstrong à 3 chiffres :
// un nombre est dit d'Armstrong quand la somme du cube de ses chiffres est égale au chiffre lui-même,
// par exemple 371 : 3**3 + 7**3 + 1**3 = 371
let armstrong_array = [];
    for ( let num_puiss_un = 100; num_puiss_un<1000; num_puiss_un ++){
        num_puiss_un = num_puiss_un.toString();
        let result_arm = 0
        for ( i = 0 ; i < num_puiss_un.length ; i ++ ){
            result_arm += Math.pow(parseInt(num_puiss_un[i]),3);
        }
        if (result_arm == num_puiss_un){
            armstrong_array.push(result_arm);
        }
    }
    console.log(armstrong_array)



    // Trouver dans une chaine (saisie input ou argument)
    // le nombre de voyelles

    function voyelles(phrase_voy){
        let voy = "aeiouy"
        let count_voy = 0
        for (let i in phrase_voy){
            if (voy.includes(phrase_voy[i])){
                count_voy ++;
            }
        }
        console.log(count_voy);
    }
    voyelles("hello les everybody");




    // setTimeout(()=>{console.log("hello les everybody")},2000)

    // setInterval(() => {
    //     console.log("hello");
    // }, 1);




// Fabriquer une animation qui fait "tourner" un texte en enlevant periodiquement (100ms) une lettre à la 
// fin d'une chaine et en la replaçant au début de la chaine :
// "ma super chaine "
// " ma super chaine"
// "e ma super chain"
// 'ne ma super chai"
// "ine ma super cha"
// "aine ma super ch"
// etc ...


