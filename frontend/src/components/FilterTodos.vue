<template>
  <select @change="filterTodos($event)" class="form-select filter ms-auto">
    <option selected>Filter</option>
    <option value="100">100</option>
    <option value="50">50</option>
    <option value="25">25</option>
    <option value="5">5</option>
  </select>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
};
</script>
