<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">

        <!-- wrapper -->
        <div class="notify__wrapper">

          <!-- title -->
          <div class="notify-title">
            <p>Notify App</p>
            <!-- svg -->
          </div>

          <!-- notify -->
          <div class="notify__content">
            <Notify :messages="messages" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Notify from "@/components/Notify";
export default {
  components: { Notify },
  data() {
    return {
      messages: [
        { title: "message_1" },
        { title: "message_2" },
        { title: "message_3" },
        { title: "message_4" },
        { title: "message_5" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
.notify__wrapper {
  width: 400px;
  background-color: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 1);
}
.notify__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}
.notify-title {
  p {
    font-size: 24px;
  }
}
section {
  padding: 0;
}
</style>