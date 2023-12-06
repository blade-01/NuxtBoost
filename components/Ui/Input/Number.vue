<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
defineProps<{
  name: string;
  label?: string;
  error?: string;
  outerClasses?: string;
  required?: boolean;
  currency?: string;
  locale?: string;
  fractionDigits?: number;
}>();
</script>

<template>
  <Field
    :name="name"
    as="div"
    class="input-group w-full"
    :class="{
      error: error,
      [outerClasses || '']: outerClasses,
    }"
    v-slot="{ handleChange, value }"
  >
    <label v-if="label" :for="label">
      {{ label }}
      <span v-if="required" class="required-mark">*</span>
    </label>
    <div class="relative">
      <PvInputNumber
        :model-value="value"
        class="!rounded-md w-full"
        :class="{
          'p-invalid !border-red-500': error,
        }"
        :currency="currency"
        :locale="locale"
        :minFractionDigits="fractionDigits"
        v-bind="$attrs"
        @update:modelValue="handleChange"
        :pt="{
          input: { class: 'input-style ring-0' },
        }"
      ></PvInputNumber>
    </div>
    <small v-if="error" class="error-message">{{ error }}</small>
  </Field>
</template>

<style scoped></style>
