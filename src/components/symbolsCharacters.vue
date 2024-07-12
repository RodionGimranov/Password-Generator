<template>
  <div class="symbols_block">
    <p classs="block_title">{{ $t("message.symbols") }} (&#@!)</p>
    <div class="chek_box" @click="includeSymbols">
      <img
        class="chekMark"
        v-if="chekMark"
        src="../assets/svg/chek-mark-icon.svg"
        alt="Chek mark icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "VueSymbols",
  props: {
    symbolsArray: { type: Array },
  },
  data() {
    return {
      chekMark: false,
    };
  },
  methods: {
    includeSymbols() {
      this.chekMark = !this.chekMark;
      this.$emit("toggle-symbols", this.chekMark);
    },
  },
};
</script>

<style lang="scss">
.symbols_block {
  width: 100%;

  padding: 6px 10px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .block_title {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .chek_box {
    width: 19px;
    height: 19px;

    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    background: none;
    padding: 0px 0px 3px 1px;
    cursor: pointer;
    transition: 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .chekMark {
      user-select: none;
      -webkit-user-select: none;
    }
  }
}
</style>
