<template>
  <table class="table table-borderless">
    <thead>
      <tr>
        <th>TANGGAL UPDATE</th>
        <th>DIUPDATE OLEH</th>
        <th>NAMA PARAMETER</th>
        <th>TANGGAL EFEKTIF</th>
        <th>OPTIONS</th>
      </tr>
    </thead>
    <tbody v-if="listData && listData.length > 0 ? true : false">
      <tr></tr>
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="5">No Data Found</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
