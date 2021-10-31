<template>
  <div id="app">
    <div class="header">
      <div class="overlay"></div>
      <div class="header-text">
        <h1>What Todos</h1>
      </div>
    </div>
    <div class="app-container">
      <div class="container">
        <div class="todos-container">
          <router-view />
        </div>
      </div>
      <footer>
        <h6>
          Powered by: Vue 3 | Vuex 4 | Axios | Bootstrap 5 | Ruby on Rails 6 |
          SQLite 3
        </h6>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "./styles/custom-bootstrap";

body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.6;
  overflow: auto;
  background: white;
}

.header {
  width: 100%;
  height: 300px;
  top: 0;
  left: 0;
  color: white;
  background-image: url("https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962_960_720.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -1;
  .header-text {
    text-align: center;
    padding-top: 60px;
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    h1 {
      font-size: 70px;
    }
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 300px;
  background-color: #0d6efd;
  top: 0;
  left: 0;
  opacity: 0.25;
}

.app-container {
  min-height: 100vh;
  position: relative;
}

.todos-container {
  width: 100%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  background: #f7f7f7;
  margin: 200px 0 80px 0;
}

footer {
  padding: 18px 0 12px 0;
  color: white;
  background: #0d6efd;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.form-select {
  color: #6c757d;
  opacity: 1; /* Firefox */
}

// Date Time Calendar
.dp__month_year_row {
  background-color: #0d6efd;
  color: white;
}
.dp__inner_nav {
  color: white;
  &:hover {
    background: #659ff7;
  }
}
.dp__month_year_select {
  &:hover {
    background: #659ff7;
  }
}
.dp__pm_am_button {
  background: #0d6efd;
}
.dp__select {
  color: #198754;
}
.dp__input_icon {
  color: #6c757d;
}
.dp__button {
  .dp__icon {
    color: #0d6efd;
  }
}
.dp__input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #6c757d;
  opacity: 1; /* Firefox */
}
.dp__input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #6c757d;
}
.dp__input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #6c757d;
}
</style>
