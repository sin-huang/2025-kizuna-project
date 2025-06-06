<script setup>
import { ref, onMounted, defineExpose } from "vue";
import { getPhotos, uploadPhoto, deletePhoto } from "@/api/photos";

const photoList = ref([
  { file: null, preview: "" },
  { file: null, preview: "" },
  { file: null, preview: "" },
  { file: null, preview: "" },
  { file: null, preview: "" },
  { file: null, preview: "" },
]);

const handleFileChange = (event, index) => {
  const file = event.target.files[0];
  if (!file) return;

  const previewUrl = URL.createObjectURL(file);
  photoList.value[index].file = file;
  photoList.value[index].preview = previewUrl;
  event.target.value = "";
};

const removePhoto = async (index) => {
  const imageKey = photoList.value[index].key;

  if (!imageKey) {
    photoList.value[index].file = null;
    photoList.value[index].preview = "";
    return;
  }

  try {
    // 後端路由顯示方式這裡不可用完整網址，並傳編碼過的檔名
    await deletePhoto(encodeURIComponent(imageKey));
    photoList.value[index].file = null;
    photoList.value[index].preview = "";
    photoList.value[index].key = "";
    console.log("✅ 圖片刪除成功");
  } catch (err) {
    console.error("❌ 圖片刪除失敗", err);
  }
};

// 上傳後需要同步更新key，沒有把後端回傳的資訊存入photoList
const uploadAll = async () => {
  const uploadPromises = [];

  photoList.value.forEach((item, index) => {
    if (item.file) {
      const uploadPromise = (async () => {
        try {
          const data = await uploadPhoto(item.file);

          photoList.value[index] = {
            file: null,
            preview: data.url,
            key: data.key,
          };

          photoList.value = [...photoList.value];
          console.log(`第 ${index + 1} 張上傳成功`, data);
        } catch (err) {
          console.error(`第 ${index + 1} 張上傳失敗`, err);
        }
      })();
      uploadPromises.push(uploadPromise);
    }
  });

  try {
    await Promise.all(uploadPromises);
    alert("✅ 所有已選圖片都已上傳完成");
  } catch (err) {
    console.error("上傳過程發生錯誤", err);
  }
};

// 讓外部元件可以呼叫 uploadAll
defineExpose({ uploadAll });

onMounted(async () => {
  try {
    // const res = await axios.get("http://localhost:3000/api/photos");
    // const images = res.data;
    const images = await getPhotos();
    images.forEach((item, index) => {
      if (index < photoList.value.length) {
        photoList.value[index].preview = item.image_url;
        photoList.value[index].key = item.image_key;
      }
    });
  } catch (err) {
    console.error("圖片載入失敗", err);
  }
});
</script>

<template>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="(img, index) in photoList"
      :key="index"
      class="relative flex items-center justify-center overflow-hidden border border-dashed cursor-pointer rounded-xl aspect-square"
    >
      <input
        type="file"
        class="absolute inset-0 opacity-0 cursor-pointer"
        @change="handleFileChange($event, index)"
      />

      <img
        v-if="img.preview"
        :src="img.preview"
        :key="img.preview"
        class="object-cover w-full h-full"
      />

      <button
        v-if="img.preview"
        @click.stop="removePhoto(index)"
        class="absolute flex items-center justify-center w-6 h-6 text-sm text-orange-500 bg-white border border-gray-300 rounded-full bottom-1 right-1 hover:bg-orange-100"
      >
        ✕
      </button>

      <span v-else class="text-2xl text-gray-400">+</span>
    </div>
  </div>
</template>
