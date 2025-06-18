# Étape 1 : Build de l'app avec Vite
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:1.25-alpine

# Nettoie les fichiers nginx existants
RUN rm -rf /usr/share/nginx/html/*

# Copie les fichiers de build
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ✅ Corrige les permissions : sans ça, Nginx renvoie une erreur 500
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]