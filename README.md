# scoreboard

Realtime Leaderboard for a Unity3D based Game, made with Django.

'''
* le serveur est lancer automatiqument sur 'crontab' par la commande: "python3 /root/django/scoreboard/scoreProject/score/manage.py runserver 0.0.0.0:80

* Lancer la commande: curl -X POST -H "Content-Type: application/json" -d ' { "user": "selena", "score": 99 }' http://188.166.171.249/scoreboard/?format=api

affecter a user un nom de joueur et a score un chiffre represantant son score

'''

* Pour acceder a�l'interface admin:
1/ Lancer sur le browser à : http://188.166.171.249/admin/
login: admin , mot de passe jorf2018
2/Lancer la page http://188.166.171.249/admin/scoreboard/gamer/
3/ selectionner les gamers et mettre dans action: delete selected gamers

*La page affichant les scores:
http://188.166.171.249/scoreboard/home


* Si vous voulez manipuler l'api:

http://188.166.171.249/scoreboard/?format=api  , une liste des utilisateurs et keurs score, method=Get

http://188.166.171.249/scoreboard/gamer/id , supprimer par linterface api un utilisateur, en remplacant l'id par un chiffre



