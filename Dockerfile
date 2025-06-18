# Étape 1 : Build de l'app avec Vite
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx
FROM nginx:1.25-alpine

# Supprimer le contenu par défaut de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier le build Vite dans le dossier servi par Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier une config nginx custom (on la crée juste après)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port
EXPOSE 80

# Lancer nginx
CMD ["nginx", "-g", "daemon off;"]