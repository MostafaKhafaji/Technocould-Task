<template>
  <form @submit.prevent="handleSubmitUpload" @dragover.prevent @drop.prevent>
    <label> Drop file here or click to upload file</label>
    <label class="icon" for="file-input">
      <div @drop="dragFile" class="drop-down">
        <div class="icon">
          <input id="file-input" @change="dragFile" type="file" />
          <span class="material-symbols-outlined upload"> file_upload </span>
        </div>
        <strong> The file format mast be</strong> PDF . WO.PDF
      </div></label
    >

    <div class="files" v-if="file.length && unSupportedFile">
      <ul v-for="item in file" :key="item">
        <li>
          <span class="material-symbols-outlined"> picture_as_pdf </span>
          <p>{{ item.name }}</p>
          <span class="size">{{ Math.round(item.size / 1024) }}kb</span>
        </li>
      </ul>
      <p @click="deleteFile" class="delete">
        <span class="material-symbols-outlined"> Delete </span>
        delete
      </p>
    </div>
    <div v-if="file.length && !unSupportedFile" class="unvalid">
      Please Choose Suppurted File Type
    </div>
    <button class="form" :disabled="!valid">Confirmation</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      file: [],
      unSupportedFile: false,
    };
  },

  methods: {
    handleSubmitUpload() {
      this.$emit("finish");
    },

    dragFile(e) {
      this.file = e.target.files || e.dataTransfer.files;
      if (this.file.length && this.file[0].type == "application/pdf") {
        this.valid = true;
        this.unSupportedFile = true;
        return;
      } else {
        this.unSupportedFile = false;
      }
    },
    deleteFile() {
      this.file = [];
      this.valid = false;
    },
  },
};
</script>

<style>
.drop-down {
  background-color: rgb(223, 223, 223);
  margin-bottom: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 2px dashed rgb(175, 175, 175);
  border-radius: 10px;
  text-align: center;
}
.files {
  background-color: rgb(223, 223, 223);
  margin-bottom: 10px;
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  border: 2px dashed rgb(175, 175, 175);
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.files .delete:hover {
  color: red;
}
.files p {
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.1s ease;
}

.unvalid {
  color: red;
  font-size: 12px;
  font-weight: bold;
}
.size {
  color: rgb(85, 85, 85);
  font-size: 12px;
}
.upload {
  color: rgb(0, 160, 0);
  font-size: 30px;
}

input {
  display: none;
}
label.icon {
  cursor: pointer;
}
</style>
