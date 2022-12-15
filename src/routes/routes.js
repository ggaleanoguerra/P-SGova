import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Actividades from "@/pages/actividades.vue";
import Actividad2 from "@/pages/actividad2.vue";
import Actividad3 from "@/pages/actividad3.vue";
import creditos from "@/pages/creditos.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Contenido",
        component: Dashboard,
      },
      {
        path: "actividad1",
        name: "Actividades",
        component: Actividades,
      },
      {
        path: "actividad2",
        name: "Actividad 2",
        component: Actividad2,
      },
      {
        path: "actividad3",
        name: "Actividad 3",
        component: Actividad3,
      },
      {
        path: "icons",
        name: "Creditos",
        component: creditos,
      },
      {
        path: "table",
        name: "Evaluación",
        component: TableList,
      },
      {
        path: "typography",
        name: "Material extra",
        component: Typography,
      },
    ],
  },
];

export default routes;
