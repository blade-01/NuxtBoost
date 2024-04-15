<script setup lang="ts">
import UiBtn from "~/components/Ui/Btn/index.vue";
import useTheme from "~/composables/useTheme";
defineEmits(["toggleSidebar"]);
const { setTheme } = useTheme();
const { tooltipStyle } = usePvStyle();
const { toggleSidebar, nav } = inject("collapsible") as {
  nav: boolean;
  toggleSidebar: () => void;
};
const sidebarToggler = ref<InstanceType<typeof UiBtn> | null>(null);
useShortcut({
  toggle() {
    sidebarToggler.value?.triggerClick();
  },
});
defineProps<{
  title: string | undefined;
}>();
</script>

<template>
  <div
    class="flex items-center main fixed top-0 w-full h-[var(--sidebar-height)] z-50 shadow-sm border-b border-b-border-primary dark:border-b-border-secondary bg-bg-primary dark:bg-bg-secondary md:w-[calc(100%-var(--sidebar-width-md))] lg:w-[calc(100%-var(--sidebar-width-lg))] 2xl:w-[calc(100%-var(--sidebar-width-2xl))] transition-all ease-out duration-500"
    :class="{
      'md:!w-full': nav,
    }"
  >
    <div class="p-4 w-full">
      <div class="hidden md:block absolute top-4 -left-3.5 z-50">
        <UiBtn
          v-tooltip="{
            value: `${nav ? 'collapse [' : 'expand ['}`,
            pt: tooltipStyle,
          }"
          ref="sidebarToggler"
          class="!p-2 !bg-sidebar-primary dark:!bg-sidebar-secondary border border-bg-secondary/[0.2] dark:border-bg-primary/[0.2] rounded-full !h-7 !w-7 !flex !justify-center !items-center"
          @click="toggleSidebar"
        >
          <Icon
            :name="nav ? 'mdi:chevron-right' : 'mdi:chevron-left'"
            class="!flex"
            size="26"
          ></Icon>
        </UiBtn>
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-2 md:hidden">
          <UiBtn
            v-tooltip="{
              value: `${!nav ? 'collapse [' : 'expand ['}`,
              pt: tooltipStyle,
            }"
            ref="sidebarToggler"
            class="!p-0 !bg-transparent"
            @click="toggleSidebar"
          >
            <Icon name="mdi:menu" class="text-3xl font-bold cursor-pointer"></Icon>
          </UiBtn>
          <p class="text-style text-2xl font-semibold">
            {{ truncateString(title || "", 20) }}
          </p>
        </div>
        <p class="text-style text-2xl font-semibold hidden md:flex pl-5">
          {{ truncateString(title || "", 20) }}
        </p>
        <div class="flex items-center gap-4">
          <Icon
            :name="
              $colorMode.value === 'dark' ? 'mdi:weather-night' : 'mdi:weather-sunny'
            "
            size="23"
            class="cursor-pointer"
            @click="setTheme($colorMode.preference === 'dark' ? 'light' : 'dark')"
          />
          <div class="flex gap-2 items-center cursor-pointer">
            <img
              src="https://avatars.githubusercontent.com/u/47092407?v=4"
              alt="illustration_01"
              class="w-10 h-10 border-2 border-primary rounded-full"
            />
            <p class="hidden md:flex">Blade</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
