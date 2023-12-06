<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
defineProps<{
  name: string;
  options: any[];
  label?: string;
  error?: string;
  outerClasses?: string;
  required?: boolean;
  optionLabel?: string;
  optionValue?: string;
  filter?: boolean;
  disabled?: boolean;
  showClear?: boolean;
}>();

const { dropdownStyle } = usePvStyle();
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
      <PvDropdown
        :model-value="value"
        class="!rounded-md w-full px-5"
        :class="{
          'p-invalid !border !border-red-500': error,
        }"
        :pt="dropdownStyle"
        :options="options"
        :option-label="optionLabel"
        :option-value="optionValue"
        :filter="filter"
        :disabled="disabled"
        :show-clear="showClear"
        v-bind="$attrs"
        @update:modelValue="handleChange"
      ></PvDropdown>
    </div>
    <small v-if="error" class="error-message">{{ error }}</small>
  </Field>
</template>

<style scoped></style>
