from flask import Flask
import os

app = Flask(__name__)

# Obtener el valor de la variable de entorno
MESSAGE = os.environ.get('MESSAGE', 'No se ha proporcionado un mensaje')

@app.route('/')
def hello():
    return '¡Hola desde la API en Python con Flask! Mensaje: {}'.format(MESSAGE)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
