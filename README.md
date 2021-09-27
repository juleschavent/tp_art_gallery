### Comment ouvrir le projet en local
    - Télécharger le dossier complet en local
    - Importer le fichier gallery.sql dans votre phpmyadmin
    - npm install dans le dossier source du projet puis npm start
    - Lancer votre server XAMP ou MAMP etc
    - npm install dans cd server puis nodemon ./index.js localhost 3001
    
    
 ### Infos utiles
 
    Identifiants pour se log en admin sur le dashboard : user@user.com 123456
    
 ### Objectifs

   J'ai d'abord essayé de comprendre la logique du projet.
   Dans un premier temps j'ai séparé les différents modules.

      - 1 composant login et création d'utilisateurs avec un ou plusieurs profiles admin ainsi qu'une authentification anonyme
         solution choisis => firebase car facilité de création des users anonyme et sécurité importante.
         Lorsqu'on se rend dans login et qu'on register en anonyme, un UID est automatiquement généré côté firebase. Cela permet de garder une trace de l'utilisateur mais cela lui donne aussi la possibilité d'aller enchérir sur les différentes oeuvres.
         Lorsqu'on se rend dans login et qu'on register avec ID user@user.com 123456 on accède aussi à l'ajout d'oeuvre dans la bdd.

      - 1 composant CRUD pour la lecture, l'ajout, la suppression et la modification d'oeuvre dans la BDD. Seul l'ajout d'oeuvre a été fait pour l'instant. Node et React ont été choisis pour cette partie car ce sont les deux technos sur les quelles j'ai quelques compétences pour ce type de projet. Certains pluggin ont été utilisé comme express, axios, nodemon etc.. dans le but de facilité le projet.

      - 1 composant d'enchère sur les oeuvres. Pour se faire c'est l'UID automatiquement généré par firebase qui est entré sur une oeuvre dans la BDD. En effet lorsqu'un utilisateur enchéri, les champs correspondants sont modifié dans la BDD. Le problème étant que ce type d'entrée ne garde pas de trace des précédents enchérisseurs.
      Il serait intéressant par la suite qu'un utilisateur puisse garder une ou plusieurs oeuvres en favoris pour garder la trace des enchères tout au long de la soirée.

      - L'aspect création d'évenement n'a pas été fait par manque de temps et d'organisation.



### Liste des bugs (non corrigé par manque de temps et d'organisation)
      1: Lorsqu'on essaye d'enchérir sur une oeuvre sans être login alors l'app plante. Pour remédier à cela il faudrait ne faire apparaitre les enchêres que lorsqu'on est identifié (comme pour l'ajout d'oeuvre en étant admin)
      2: Lorsqu'on rajoute une nouvelle oeuvre il n'est pas possible de lui assigner une image. Pour ne pas faire planter l'app, j'ai ajouté une image "test" qui sert de placeholder".
