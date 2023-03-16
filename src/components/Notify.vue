<template>
  <table>
    <transition-group name="list" tag="tbody">
      <tr v-for="message in messages" :key="message.title">
        <td>
          <span>{{ message.title }}</span>
        </td>
      </tr>
    </transition-group>
    <button
      @click="loadMore"
      class="btn btnPrimary"
      :disabled="maxLength === 0"
      :class="{btnDisabled: maxLength === 0}"
    >
      LOAD MORE
    </button>
  </table>
</template>

<script>
export default {
  name: "Notify",
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    maxLength() {
      return this.$store.getters.GET_MESSAGES_FILTER.length;
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch("LOAD_MESSAGES");
      console.log(111);
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  text-align: center;
  border-collapse: collapse;
}
td {
  display: flex;
  justify-content: space-between;
  padding: 12px 6px;
  font-size: 14px;
  cursor: pointer;
}

/* Animation */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

button {
  margin-top: 30px;
  &.btnDisabled {
    cursor: default;
    opacity: 0.6;
  }
}
</style>
