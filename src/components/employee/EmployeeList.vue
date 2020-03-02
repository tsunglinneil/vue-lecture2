<template>
  <div>
    <p>Employee List: Please select a Employee</p>
    <hr />
    <ul class="list-group">
      <router-link
        tag="li"
        to="/employee/1"
        class="list-group-item"
        style="cursor: pointer"
        >Employee 1</router-link
      >

      <router-link
        tag="li"
        to="/employee/2"
        class="list-group-item"
        style="cursor: pointer"
        >Employee 2</router-link
      >

      <router-link
        tag="li"
        to="/employee/3"
        class="list-group-item"
        style="cursor: pointer"
        >Employee 3</router-link
      >
    </ul>
  </div>
</template>
