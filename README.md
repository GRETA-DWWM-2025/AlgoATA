# AlgoATA
Construction d'algorithme pseudo code


Explication du code

-------------------------------------
Procédure Tri_Selection(T : tableau d'entiers, n : entier)

→ Tu déclares une procédure (pas de retour) qui prend un tableau T d'entiers et sa taille n.

-------------------------------------
Var
    i, j, x, indmin : entier

→ Déclaration des variables :

i : index du tableau en cours de tri

j : index pour chercher le plus petit élément

indmin : position du plus petit élément trouvé

x : variable temporaire pour faire un échange

--------------------------------------
Pour i de 0 à n - 2 faire

→ On parcourt le tableau de l’index 0 jusqu’à n-2.
Pourquoi n-2 ? Parce que le dernier élément sera déjà trié à la fin.

--------------------------------------
    indmin ← i

→ On suppose que le plus petit élément est à la position actuelle i.

--------------------------------------
    Pour j de i + 1 à n - 1 faire

→ On cherche dans le reste du tableau (à droite de i) s’il y a un élément plus petit.

---------------------------------------
        Si T[j] < T[indmin] alors
            indmin ← j
        FinSi

→ Si on trouve un élément plus petit que celui à indmin, on met à jour indmin.

--------------------------------------------
    x ← T[i]
    T[i] ← T[indmin]
    T[indmin] ← x

→ On échange T[i] avec T[indmin] pour placer le plus petit au bon endroit.
