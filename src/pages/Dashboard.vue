<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <h3>Pensamiento espacial & sistemas geométricos</h3>
        <article>
          Las competencias de pensamiento espacial y sistemas geométricos se
          refieren a la capacidad de comprender y manejar conceptos y relaciones
          espaciales y geométricas. Esto incluye habilidades como la percepción
          espacial, la visualización y la manipulación mental de objetos en el
          espacio, así como el conocimiento de propiedades geométricas y las
          relaciones entre ellas. Estas habilidades son importantes en muchos
          campos, como la ingeniería, la arquitectura y la ciencia, así como en
          la vida cotidiana.
        </article>
      </div>
    </div>
    <div class="video">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/KyjjFYM8aUg"
        allowfullscreen
      ></b-embed>
    </div>
    <div class="md-layout-item">
      <article>
        La percepción espacial es la capacidad de entender y representar el
        espacio en nuestra mente. Esto nos permite comprender y manipular
        objetos en el espacio, así como entender las propiedades geométricas y
        las relaciones entre ellas. La visualización y la manipulación mental de
        objetos en el espacio son habilidades clave que nos permiten realizar
        tareas como resolver problemas matemáticos y geométricos, navegar en un
        entorno desconocido, y planificar movimientos corporales. Estas
        habilidades se desarrollan a través de la práctica y la experiencia, y
        pueden ser mejoradas a través de ejercicios específicos.
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
h3 {
  font-weight: bold;
  color: white;
}
.video {
  margin: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
}

#content {
  background-color: #031e4b;
  color: white;
}
article {
  width: 90%;
  text-align: justify;
  font-size: large;
  line-height: 2;
  color: whitesmoke;
}
</style>
