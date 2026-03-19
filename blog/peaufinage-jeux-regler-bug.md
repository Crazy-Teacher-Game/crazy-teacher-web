---
title: Nouveaux jeux et correction de bugs
authors: [valentin, audric, gabriel, marius]
date: 2026-03-14
---

## Marius

Création de **DiceGame**.

Le principe est simple : un chiffre s'affiche à l'écran, et à l'aide du joystick, le joueur doit faire pivoter un dé en 3D pour aligner la bonne face avec le chiffre indiqué.

![alt text](/img/dice.png)

Côté correctif, **MentalMath** n'indiquait pas clairement quels boutons associer à quelles réponses. J'ai donc intégré un asset conçu par Gabriel pour guider le joueur. J'ai également réglé un bug étrange : la police d'écriture transformait les 6 en 9, ce qui faussait complètement les calculs.

## Gabriel

Création de **TimerGame**.

![alt text](/img/timer.png)

Le principe : une durée en secondes est affichée à l'écran. Le chrono démarre, les secondes s'écoulent, et le joueur doit buzzer au bon moment. Simple en apparence, redoutable en pratique — avec l'un de nos meilleurs professeurs comme animateur.

J'ai aussi peaufiné le jeu de tri. Après réflexion, trier des formes géométriques s'avère plus intuitif et plus lisible que trier des fruits. Ce n'est pas un nouveau jeu, juste un rebranding assumé :

![alt text](/img/tri.png)

## Audric

Création d'**ExplodeTheBalloon**.

Le concept est aussi direct qu'il en a l'air : un ballon apparaît, on spam une touche pour le gonfler, et on le fait exploser.

![alt text](/img/balloon.png)

J'ai également travaillé sur la progression de la difficulté : un système ajuste automatiquement certains paramètres — dont la vitesse et le timer — à chaque mini-jeu.

J'ai aussi implémenté le système de scoring affiché en fin de partie.

## Valentin

Création de **FlashTheCar**.

Des voitures défilent à vitesse variable : la plupart roulent normalement, mais certaines sont en infraction. Au joueur de repérer et de verbaliser avant qu'elles passent la ligne rouge !

![alt text](/img/flash.png)
