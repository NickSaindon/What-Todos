import axios from "axios";
const api_url = "http://localhost:3000/api/v1/todos";

const state = { todos: [] };

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(api_url);

    commit("setTodos", response.data);
  },
  async addTodo({ commit }, { category, title, description, scheduled }) {
    const response = await axios.post(api_url, {
      todo: {
        category,
        title,
        description,
        scheduled,
        completed: false,
      },
    });
    commit("newTodo", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(api_url + `/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const response = await axios.get(api_url + `?_limit=${limit}`);
    commit("setTodos", response.data);
  },
  async updateTodo({ commit }, updated) {
    const response = await axios.put(api_url + `/${updated.id}`, updated);

    commit("setUpdatedTodo", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  setUpdatedTodo: (state, updated) => {
    const index = state.todos.findIndex((todo) => todo.id === updated.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updated);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
