<script setup lang="ts">
import DropdownCatalog from '@/components/UI/DropdownCatalog.vue';
import useClickOutsideHandlerBtn from '@/hooks/useClickOutsideBtn';
const {styleBtn, dropdownValue} = useClickOutsideHandlerBtn()
const openDropdown = () => {
  styleBtn.value = !styleBtn.value
  dropdownValue.value = !dropdownValue.value
}
const closeRoute = () => {
  styleBtn.value = !styleBtn.value
  dropdownValue.value = !dropdownValue.value
}
</script>

<template>
  <div class="dropdown">
    <button @click="openDropdown" :class="[styleBtn === true ? 'btn_focus' : '']" class="btn-group">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      Каталог
    </button>
    <DropdownCatalog @close-dropdown-route="closeRoute" :ul="dropdownValue === true" />
  </div>
</template>


<style lang="scss" scoped>
.btn-group {
  height: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--white-color);
  display: flex;
  align-items: center;
  padding: 8px 15px 8px 15px;
  border-radius: 5px;
  border: 1.5px solid var(--purple-color);
  background: var(--purple-color);
  transition: 0.15s ease;
  margin-right: 20px;

  & div {
    display: flex;
    flex-direction: column;
    margin-bottom: 6px;
    margin-right: 13px;
    gap: 3px;
    position: relative;

    & span {
      width: 13px;
      height: 2px;
      background-color: var(--white-color);
      border-radius: 50px;

      &:last-child {
        position: absolute;
        bottom: -5px;
        right: 0px;
        width: 7px;
        height: 2px;
        display: block;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        background: none repeat scroll 0 0 transparent;
        background: var(--white-color);
      }
    }
  }

  &:hover {
    background: rgba(129, 133, 249, 1);
    border: 1.5px solid rgba(129, 133, 249, 1);

    & span {
      &:last-child {
        width: 13px;
        right: 0px
      }
    }
  }
}
.btn_focus {
  background: rgba(129, 133, 249, 1) !important;
  border: 1.5px solid rgba(129, 133, 249, 1) !important;

  & span {
    &:last-child {
      width: 13px !important;
      right: 0px !important;
    }
  }
}

</style>