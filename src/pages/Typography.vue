<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Material extra de aprendizaje</h4>
            <p class="category">
              Material aparte de los contenidos que sirven para el proceso
              académico
            </p>
          </md-card-header>
          <md-card-content>
            <div id="typography">
              <div class="title">
                <h2>Videos</h2>
              </div>
              <div class="row">
                <div class="tim-typo">
                  <h1>
                    <span class="tim-note">Header 1</span>
                  </h1>
                </div>
                <div class="tim-typo">
                  <h2><span class="tim-note">Header 2</span>Video</h2>
                </div>
                <div class="tim-typo">
                  <h3><span class="tim-note">Header 3</span>Video</h3>
                </div>
                <div class="tim-typo">
                  <h4><span class="tim-note">Header 4</span>Video</h4>
                </div>
                <div class="tim-typo">
                  <h5><span class="tim-note">Header 5</span>Video</h5>
                </div>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataBackgroundColor: {
      type: String,
      default: "",
    },
  },
};
</script>
