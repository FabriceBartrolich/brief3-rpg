
# Consignes

Tu vas devoir trouver les informations suivantes et les tester au fur et à mesure dans ton programme pour expérimenter et comprendre comment TypeScript pourra t'aider à écrire ton meilleur code !

## Level 1

- Quels sont les différents type primitives de données en TypeScript ? 

Ce sont les suivants : 

number : représente les nombres, entiers ou décimaux.
```
Exemple :
let age: number = 51;
```
string : représente les chaînes de caractères.
```
Exemple :
let age: string = "chocolat";
```
null et undefined : les types spéciaux qui représentent une absence de valeur.
On utilise ‘null’ quand on souhaite spécifiquement indiquer qu’une variable n’a aucune valeur.
On utilise ‘undefined’ quand la valeur d’une variable n’a pas été définie.
```
Exemple :
let age: null = null;
let adress: undefined = undefined;
```
void : il est utilisé pour indiquer l'absence de type.
```
Exemple :
function salutation(): void {
  console.log("Hello!");
}
```
il est utile lorsqu'on a besoin d'exécuter une action dans une fonction sans attendre de valeur de retour.

symbol : représente un type unique et immuable, utilisé pour créer des identifiants uniques. Il peut servir de clé dans les objets.
```
Exemple :
const mySymbol = Symbol(«mon ID unique»);
```
bigint : représente des entiers de taille arbitraire. On l’utilise quand on doit manipuler des nombres entiers importants.
```
Exemple :
let grosChiffre: bigint = 84756781484511864197;
```

- Comment typer un tableau ? 

Pour un tableau de nombres :
```
Syntaxe :
let tab: number[] = [1, 2, 3];
```
Pour un tableau de chaîne de caractères :
```
Syntaxe :
let tab: string[] = ["Haribo", "Lutti", "maltesers"];
```
et ainsi de suite...

Il existe aussi un type générique : 
```
Syntaxe :
let number: Array<number> = [1, 2, 3];
```

- Quel est le type `any` ?

Il est utilisé pour représenter n’importe quelle valeur. Cela nous permet d’ignorer la vérification de Typescript.
```
Exemple :
 let Everything: any = valeur;

 let valeurAny: Array<any> = [1, "test", 4];
```
!Attention : ce type spéciale est à utiliser avec prudence, voir à éviter si possible.

- Comment typer le retour d'une fonction ainsi que le type de ses paramètres ? 

Pour typer le retour d'une fonction, on utilise la syntaxe :
```
Exemple :
function salutation(name: string): string{
   return `Bonjour${nom} !`;
}
```
Pour typer les paramètres d'une fonction, il faut spécifier le nom du paramètre suivi du caractère ":" et du type attendu :
```
Exemple :
function doubleNumber(num: number): number {
   return num*2;
}
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 2

- Qu'est ce qu'une classe ? 

C'est une structure qui permet de définir un modèle pour créer un objet. Elle est composée de propriétés (variables) et de méthodes (fonctions) qui définissent le comportement de ces objets. C'est comme une notice de fabrication qui contient l’ensemble des informations nécessaires à la création d’un objet. Pour déclarer une classe en TypeScript nous devons utiliser le mot clé "class" suivi de son nom commençant par une majuscule.
```
Exemple :
 class Identité { 
   //contenu
}
```
Elle est généralement composée de cette manière :

° Champs : un champ est une variable déclarée dans une classe, il représente les données relatives aux objets.

° Constructeurs : il alloue les variables de la classe.

° Fonctions : Les fonctions représentent les actions qu’un objet peut effectuer.
```
Exemple :
 class Identité { 
   //Champ
   name: string;
   age: number;

   //Constructeur
   /*contenu*/

   //Fonction
   /*contenu*/
}
```

- Qu'est ce qu'un constructeur de classe ? 

C'est comme une recette que l'on suit pour fabriquer un objet et lui donner certaines caractéristiques (propriétés & méthodes) dès sa création. TypeScript définit un constructeur à l’aide du mot-clé "constructor". Un constructeur est une fonction et peut donc être paramétrée. Il est appelé par le mot clé "new".
```
Exemple :
 class Identité { 
   //Champ
   name: string;
   age: number;

   //Constructeur
   constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
   }
}
```
- Qu'est ce qu'une instance de classe ?

Imaginons un moule à gâteaux, on peut comparer une classe comme un moule pour fabriquer des gâteaux. Le moule définit la forme (variables) et les caractéristiques générales (fonctions) du gâteau, mais il ne s'agit pas du gâteau lui-même. Lorsque nous utilisons le moule pour verser la pâte à gâteau, on obtient un vrai gâteau qui est une instance du moule.

- Comment vérifier qu'une instance est d'une certaine classe ?

On peut utiliser l'opérateur "instanceof". Il permet de vérifier si un objet est d'une instance spécifique d'une classe ou d'une sous-classe.
```
Exemple :
console.log(dog instanceof Animal); // true
```

- Qu'est ce que `this` dans une classe ?

le mot clé "this" dans une classe permet d'acceder aux propriétes et méthodes de la classe elle-même.
```
Exemple :
constructor(name: string) {
    this.name = name;
  }
```

- Qu'est ce qu'une méthode de classe ?

Une méthode de classe est une fonction définie à l'intérieur d'une classe qui décrit le comportement d'un objet de cette classe. Considérons une classe comme une boite à outils et les méthodes comme les différents outils à l'intérieur de cette boîte. Chaque méthode a une fonction spécifique qu'elle peut effectuer sur les instances de cette classe.
```
Exemple :
class Calculette {
  somme(a: number, b: number): number {
    return a + b;
  }
}
```

- Qu'est ce que la visibilité des propriétés ? 

Elle détermine leur accessibilité depuis l'extérieur de la classe. En d'autres termes, cela indique quelles parties du code peuvent accéder et modifier ces propriétés.

Il existe trois niveaux de visibilité :

Public : Elles sont accessibles depuis n'importe où, à la fois à l'intérieur de la classe et depuis l'extérieur. Elles peuvent être lues et modifiées librement. En TypeScript, si aucune visibilité n'est spécifiée, la visibilité par défaut est publique.

Private : Elles sont uniquement accessibles à l'intérieur de la classe où elles sont définies. Cela permet d'encapsuler les données et de limiter leur accès direct.

Protected : C'est comme les propriétés privées, mais elles sont également accessibles dans les classes dérivées (sous-classes) de la classe où elles sont définies. Cela permet aux classes dérivées d'accéder et de modifier ces propriétés.
```
Exemple :
class Person {
  public name: string;       // Propriété publique
  private age: number;       // Propriété privée
  protected address: string; // Propriété protégée
}
```

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Level 3

- Comment faire pour diviser notre programme en différents fichiers ? (ex: une classe dans un fichier que j'importe dans un autre).

On utlise les mot clés "import" et "export" pour diviser notre programme en différents fichiers. Il faut vérifier que tous les dossiers que l'on a diviser soit tous regrouper le même fichier JS.
```
Exemple :
export class Person {
  name: string;
}
```

 ```
Exemple :
import { Person } from "./Person";
```

- Qu'est ce que l'héritage ? 

Il permet à une classe d'hériter des caractéristiques (méthodes et propriétés) d'une autre classe. On utilise le mot clé "extends" pour dire qu'une classe reçoit les propriétes et méthodes d'une classe mère.
 ```
Exemple :
class Dog extends Animal {
  breed: string;
}
```

- Comment appeler le constructeur d'une classe mère ?

Le mot-clé "super" est utilisé pour faire référence à la classe mère et appeler son constructeur.
 ```
Exemple :
  constructor(name: string, breed: string) {
    super(name); // Appel du constructeur de la classe mère (Animal)
    this.breed = breed;
  }
```
- Comment appeler une méthode d'une classe mère ?

Il faut utiliser le mot clé "super.method()" pour faire référence à la méthode de la classe mère et exécuter son comportement. Cela permet de réutiliser le comportement de la classe mère tout en ajoutant ou en étendant le comportement spécifique à la sous-classe.

- Qu'est ce que le polymorphism ? 

 il donne la possibilité à des objets de différentes classes d'être traités de la même manière en utilisant une interface commune. Cela permet d'appeler des méthodes sur ces objets sans se soucier de leur type spécifique, car chaque objet exécutera la méthode appropriée en fonction de son propre comportement.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

## Boss level 

Met en pratique le fruit de tes recherches à travers cet exercice en binôme !
### Partie 1 : Héros

La classe `Hero` permet de créer des objets possédant les propriétés suivantes :

    name : string
    power : number
    life : number

​Et les méthodes

    attack(opponent: Hero)
    isAlive()

​La méthode `attack` a un paramètre `opponent` (de type `Hero`). Il faut réduire le nombre (`life`) de `opponent` d'autant de dégats (`power`) de l'attaquant.

​
*Exemple : Si Joan attaque Leon, cela sera représenté par :*

    joan.attack(leon)

​La méthode `isAlive` devrait retourner `true` si le nombre de points de vie du héros est supérieur à zéro et `false` sinon.

Crée deux instances de `Hero` et vérifie que les méthodes `attack` et `isAlive` fonctionnent.

**Contrainte à ajouter** : il faut maintenant faire en sorte que les propriétés `name`, `power`, `life` soient privées. Tu vas devoir créer des méthodes permettant d'accéder à leur valeur et de modifier leur valeur.

### Partie 2 : Armes
​
Crée une classe `Weapon` avec la propriété suivante :

    name : string

Ajoute l'attribut `weapon` (de type `Weapon`) à la classe `Hero` sans modifier le constructeur (ainsi `weapon` n'est pas initialisé).

Crée trois classes `HeroAxe`, `HeroSword` et `HeroSpear` qui héritent de `Hero`.

Ces trois classes appellent le constructeur de leur parent et initialisent `weapon` avec des instances de la classe `Weapon` dont les noms seront `axe`, `sword` ou `spear` selon le cas.

Dans les classes `HeroAxe`, `HeroSword` et `HeroSpear`, redéfinisse la méthode `attack` pour prendre en compte les cas suivants :

- `HeroAxe` : si le type de `opponent` est `HeroSword`, multiplier `power` par deux
- `HeroSword` : si le type de `opponent` est `HeroSpear`, multiplier `power` par deux
- `HeroSpear` : si le type de `opponent` est `HeroAxe`, multiplier `power` par deux

​
Astuce : utilise le mot-clé `super` pour appeler la méthode `attack` de la classe parente.

Crée des instances des trois classes `HeroAxe`, `HeroSword` et `HeroSpear` et vérifie que leurs méthodes `attack` fonctionnent correctement.
​
### Partie 3 : Bataille

Crée une boucle qui fait que deux instances de sous-classes `Hero` s'affrontent (elles attaquent en même temps).

Quand au moins l'une d'entre elles est morte, afficher `{heroName} wins`. Si les deux sont morts, afficher `It's a draw`.

**🎉🎉🎉Mettre à jour le tableau Github Project🎉🎉🎉**

---

***Bonus 1 : Les dégâts de l'arme***

*Ajoute une propriété `damage` à la classe `Weapon` et fait en sorte qu'elle soit initialisée par le constructeur.*

*Modifie la méthode `attack` de `Hero` afin que les dégâts soient calculés de la façon suivante : la puissance du héro `power` + les dégâts de l'arme `power`*

***Bonus 2 : Interface graphique***

*Réalise une interface graphique pour l'application (par exemple, avec un choix de héros et d'armes, et un visuel sur les dégâts infligés)*

# brief3-rpg
