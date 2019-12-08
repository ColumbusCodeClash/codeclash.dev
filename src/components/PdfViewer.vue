<template>
  <modal :show.sync="modals.modal0">
    <template slot="header">
      <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
    </template>

    <div>      
    <pdf :src="filePath" :page="1">
      <template slot="loading">
        loading content here...
      </template>
    </pdf>
    </div>

    <template slot="footer">
      <base-button type="secondary" @click="modals.modal0 = false">Close</base-button>
    </template>
  </modal>
</template>

<script>
import pdf from 'pdfvuer';

export default {
    name: 'pdf-viewer',
    components: {
      pdf
    },
    props: ['filePath']
}
</script>

<style>

</style>