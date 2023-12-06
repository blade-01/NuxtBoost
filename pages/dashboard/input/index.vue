<script setup lang="ts">
import useValidations from "~/composables/useValidations";
definePageMeta({ layout: "dashboard" });
useHead({
  title: "Forms",
});

const { mainSchema } = useValidations();
const genders = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const countries = [
  {
    label: "Nigeria",
    value: "nigeria",
  },
  {
    label: "Malaysia",
    value: "malaysia",
  },
  {
    label: "Finland",
    value: "finland",
  },
];

const cities = [
  {
    label: "Lagos",
    value: "lagos",
  },
  {
    label: "Abuja",
    value: "abuja",
  },
  {
    label: "Port Harcourt",
    value: "port-harcourt",
  },
  {
    label: "Ibadan",
    value: "ibadan",
  },
];
</script>

<template>
  <div>
    <div>
      <Form v-slot="{ errors, values }" :validation-schema="mainSchema">
        <div class="mb-5">
          <p class="title pb-1.5">Basic Inputs</p>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3.5">
            <UiInputField
              name="first_name"
              label="First Name"
              placeholder="First Name"
              required
              :error="errors.first_name"
            />
            <UiInputField
              name="last_name"
              label="Last Name"
              placeholder="Last Name"
              required
              :error="errors.last_name"
            />
            <UiInputField
              name="email"
              type="email"
              label="Email"
              placeholder="Email"
              required
              :error="errors.email"
            />
            <UiInputField
              name="portfolio"
              type="url"
              label="Portfolio"
              placeholder="Portfolio"
              required
              :error="errors.portfolio"
            />
            <UiInputPassword
              name="password"
              label="Password"
              placeholder="Password"
              required
              :error="errors.password"
            />
            <UiInputPassword
              name="password_confirmation"
              label="Confirm Password"
              placeholder="Confirm Password"
              required
              :error="errors.password_confirmation"
            />
            <UiInputNumber
              name="currency"
              currency="NGN"
              locale="en-NG"
              label="Currency"
              mode="currency"
              required
              :error="errors.currency"
            />
            <UiInputDropdown
              name="gender"
              :options="genders"
              option-label="label"
              option-value="value"
              label="Gender"
              filter
              show-clear
              required
              :error="errors.gender"
            />
            <UiInputMultiSelect
              name="country"
              :options="countries"
              option-label="label"
              option-value="value"
              label="Countries"
              filter
              show-clear
              required
              :error="errors.country"
            />
            <UiInputMultiSelect
              name="city"
              :options="cities"
              option-label="label"
              option-value="value"
              label="Cities"
              filter
              show-clear
              required
              :error="errors.city"
              display="chip"
            />
            <!-- <UiInputChips name="chips" label="Chips" required :error="errors.chips" /> -->

            <UiInputField
              as="textarea"
              name="message"
              label="Message"
              placeholder="Message"
              required
              :error="errors.message"
            />
          </div>
          <div class="flex items-center gap-5 w-full">
            <UiInputCheckbox name="checkbox" label="Checkbox" />
            <UiInputRadiobutton name="radio" label="Radio button" />
            <UiInputSwitch name="switch" label="Switch" />
          </div>
        </div>
        <p class="title pb-1.5">Date Pickers</p>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3.5">
          <UiInputDatePicker
            required
            :error="errors.date"
            name="date"
            label="Day"
            dateFormat="dd-mm-yy"
          />
          <UiInputDatePicker
            required
            :error="errors.month"
            name="month"
            label="Month"
            view="month"
            dateFormat="mm/yy"
          />
          <UiInputDatePicker
            required
            :error="errors.year"
            name="year"
            label="Year"
            view="year"
            dateFormat="yy"
          />
          <UiInputDatePicker
            required
            :error="errors.date_time"
            name="date_time"
            label="Date with time"
            showTime
            hourFormat="12"
            dateFormat="dd-mm-yy"
          />
          <UiInputDatePicker
            required
            :error="errors.time"
            name="time"
            label="Time"
            timeOnly
            hourFormat="24"
          />
          <UiInputDatePicker
            required
            :error="errors.multiple"
            name="multiple"
            label="Multiple Dates"
            selectionMode="multiple"
          />
          <UiInputDatePicker
            required
            :error="errors.range"
            name="range"
            label="Date Range"
            selectionMode="range"
          />
          {{ values.range }} {{ values.time }} {{ values.multiple }}
        </div>
        <div class="flex justify-end gap-2.5">
          <UiBtn
            label="Cancel"
            size="xs"
            type="button"
            outer-class="!bg-transparent border border-gray-500"
          />
          <UiBtn label="Submit" size="xs" />
        </div>
      </Form>
    </div>
  </div>
</template>

<style scoped></style>
