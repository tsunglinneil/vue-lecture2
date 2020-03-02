import Home from "./components/Home.vue";
import Employee from "./components/employee/Employee.vue";
import EmployeeList from "./components/employee/EmployeeList.vue";
import EmployeeDetail from "./components/employee/EmployeeDetail.vue";
import EmployeeEdit from "./components/employee/EmployeeEdit.vue";

function dynamicPropsFn(router) {
  return { id: router.params.id };
}

export const routes = [
  { path: "", component: Home, name: "home" },
  {
    //todo，將params 自nested route中移動其中一個到這裏
    path: "/employee",
    component: Employee,
    children: [
      { path: "", component: EmployeeList, name: "listEmployee" },
      { path: ":id", component: EmployeeDetail, props: dynamicPropsFn },
      { path: ":id/edit", component: EmployeeEdit, name: "editEmployee" },
    ],
  },
  { path: "/redirectTo", redirect: { name: "home" } },
  { path: "*", redirect: { name: "home" } },
];
