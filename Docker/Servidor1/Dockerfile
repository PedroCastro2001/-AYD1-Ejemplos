# Usa la imagen oficial de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor en /app
WORKDIR /app

# Copia los archivos necesarios al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install


# Copia todos los archivos y directorios desde el directorio de construcción local
# al directorio de trabajo dentro del contenedor (/app)
COPY . .

# Exponer el puerto 3000 para que sea accesible desde fuera del contenedor
EXPOSE 3000

# Definiendo una variable de entorno
ENV MESSAGE "¡LAB AYD1 1S-2024!"

# Comando por defecto para iniciar la aplicación
CMD ["node", "index.js"]
