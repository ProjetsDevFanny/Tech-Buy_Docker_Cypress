<div align="center">

# OpenClassrooms - Tech-Buy
</div>

<p align="center">
    <img src="https://img.shields.io/badge/Mysql-v8.0-blue">
    <img src="https://img.shields.io/badge/Symfony-v6.2-blue">
    <img src="https://img.shields.io/badge/Angular-v15.2.0-blue">
    <img src="https://img.shields.io/badge/docker--build-passing-brightgreen">
  <br><br><br>
</p>

# Prérequis
Pour démarrer cet applicatif web vous devez avoir les outils suivants:
- Docker

# Installation and démarrage
Clonez le projet pour le récupérer
``` 
git clone https://github.com/OpenClassrooms-Student-Center/Tech-Buy-V2.git
cd Tech-Buy-V2
```
Pour démarrer le proojet
```
docker compose up -d
```

## Pour éteindre le projet
Assurez vous d'être dans le dossier du projet (là où se trouve le fichier docker-compose.yml)
```
docker compose down
```

## Fin de travail
Si vous ne revenez pas sur le projet, vous avez la possibilité de supprimer les fichiers et images Docker afin de récupérer la place

Attention cela supprime tous les projets Docker de votre ordinateur

```
docker system prune -a

=> tapez Y puis Entrée
```
  
## EXEMPLE DE README.md

## Tech&Buy

Boutique en ligne, permet d'acheter des produits Tech !

## Installation

Après avoir cloné le projet, il faut installer docker et il suffit de faire docker-compose up

## Contribution

Libre à vous ! Vous pouvez créer des MR/PR qui seront acceptées et mergées selon l'utilité de la proposition

## Licence

Ce projet est sous licence Beerware.

## Historique des versions

- **Version 1.0.0**
- Création du projet.
- **Version 1.0.1**
- Ajout de Cypress