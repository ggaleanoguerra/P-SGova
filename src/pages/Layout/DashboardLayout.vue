<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Contenido</p>
      </sidebar-link>
      <br />
      <sidebar-link to="/actividad1">
        <md-icon>person</md-icon>
        <p>Actividades</p>
      </sidebar-link>
      <br />
      <sidebar-link to="/table">
        <md-icon>content_paste</md-icon>
        <p>Evaluación</p>
      </sidebar-link>
      <br />
      <sidebar-link to="/typography">
        <md-icon>library_books</md-icon>
        <p>Material extra</p>
      </sidebar-link>
      <br />
      <sidebar-link to="/icons">
        <md-icon>bubble_chart</md-icon>
        <p>Créditos</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content
        style="background-color: #052254; display: grid; place-items: center"
      >
      </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    FixedPlugin,
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-5.jpg"),
    };
  },
};
</script>
