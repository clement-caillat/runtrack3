function fizzbuzz() // Définition de la fonction
{
    for(var i = 0; i <= 151; ++i) // Boucle qui s'exécute tant que i est inférieur et inégal à 151
    {
        if(i % 3 == 0 && i % 5 == 0) // Condition qui vérifie si i est multiple de 3 et 5
        {
            console.log('FizzBuzz'); // Affichage dans la console
        }
        else if(i % 3 == 0) // Condition qui vérifie si i est multiple de 3
        {
            console.log('Fizz'); // Affichage dans la console
        }
        else if(i % 5 == 0) // Condition qui vérifie si i est multiple de 5
        {
            console.log('Buzz'); // Affichage dans la console
        }
    }
}

fizzbuzz(); // Appel de la fonction