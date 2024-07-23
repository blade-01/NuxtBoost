<script lang="ts" setup>
const props = defineProps<{
  modelValue?: string;
  fields: number;
  focus?: boolean;
  fieldClass?: string;
  error?: string;
}>();

const data = ref<any>([]);
const firstInputEl = ref();
const emit = defineEmits(["update:modelValue"]);

onMounted(() => {
  props.focus && firstInputEl.value[0].focus();
});

watch(
  () => data,
  (newVal) => {
    if (newVal.value.length === props.fields && !newVal.value.includes("")) {
      emit("update:modelValue", newVal.value.join(""));
    } else {
      emit("update:modelValue", null);
    }
  },
  { deep: true }
);

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      data.value.forEach((_: any, i: any) => {
        if (!newVal[i] || newVal[i] == null || newVal[i] == " ") {
          data.value[i] = "";
        } else {
          data.value[i] = newVal[i];
        }
      });
    }
  }
);

const handleOtpInput = (e: any) => {
  if (e.data && e.target.nextElementSibling) {
    e.target.nextElementSibling.focus();
  } else if (e.data == null && e.target.previousElementSibling) {
    e.target.previousElementSibling.focus();
  }
};

const handlePaste = (e: any) => {
  const pasteData = e.clipboardData.getData("text");
  let nextEl = firstInputEl.value[0].nextElementSibling;

  console.log(pasteData.length);

  for (let i = 0; i < pasteData.length; i++) {
    data.value[i] = pasteData[i];
    if (nextEl) {
      nextEl = nextEl.nextElementSibling;
    }
  }
};
</script>

<template>
  <div class="otp flex w-full gap-2" @input="handleOtpInput">
    <template v-for="field in fields" :key="field">
      <input
        v-model="data[field - 1]"
        ref="firstInputEl"
        type="text"
        maxlength="1"
        class="border border-gray-300 rounded w-10 h-10 text-center otp-input dark:bg-gray-800 dark:border-gray-700"
        :class="{
          'border-red-500': error,
          fieldClass,
        }"
        @paste="field === 1 && handlePaste($event)"
      />
    </template>
  </div>
</template>
