<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <iframe
          frameborder="0"
          src="https://es.educaplay.com/juego/13653889-encuentra_las_palabras.html"
          id="act1"
        >
        </iframe>
      </div>
    </div>
    <div>
      <md-button to="/actividad2" class="btn btn-success"
        ><md-icon>forward</md-icon> <span>Próxima actividad</span></md-button
      >
    </div>
  </div>
</template>

<style scoped>
#act1 {
  height: 560px;
  width: 665px;
}

.md-button {
  background-color: brown;
}
</style>
