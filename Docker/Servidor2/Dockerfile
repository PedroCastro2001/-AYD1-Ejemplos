# Usa la imagen oficial de Python como base
FROM python:3-alpine3.15

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos necesarios al directorio de trabajo
COPY . /app

# Instala las dependencias del proyecto
RUN pip install -r requirements.txt

# Exponer el puerto 5000 para que sea accesible desde fuera del contenedor
EXPOSE 5000

# Definiendo una variable de entorno 
ENV MESSAGE="LAB AYD1 1S-2024"

# Comando por defecto para iniciar la aplicación
CMD python app.py