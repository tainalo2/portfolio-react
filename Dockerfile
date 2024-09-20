# Étape 1 : Build du front-end React à partir de la racine
FROM node:22-bullseye-slim as build

WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances du front-end
COPY package.json package-lock.json ./

# Installer les dépendances front-end
RUN npm install

# Copier tout le projet à partir de la racine (sauf le backend)
COPY . .

# Build du projet React à partir de la racine
RUN npm run build

# Étape 2 : Préparation de l'image finale avec le backend Node.js
FROM node:22-bullseye-slim

WORKDIR /app

# Installer bash pour exécuter des scripts si besoin
RUN apt-get update && apt-get install -y bash

# Copier les fichiers package.json et package-lock.json pour le backend
COPY package.json package-lock.json ./

# Installer les dépendances backend
RUN npm install

# Copier tout le code backend
COPY ./backend /app/backend/

# Copier le build React généré à l'étape précédente dans le dossier backend pour être servi
COPY --from=build /app/build /app/build

# Exposer le port utilisé par le serveur Node.js (par exemple, 9000)
EXPOSE 9000

# Démarrer le serveur backend
CMD ["node", "./backend/server.js"]