export default () => {
  const dropdownStyle = computed(() => {
    return {
      root: {
        class: "dropdown"
      },
      input: { class: "px-4 dropdown-text" },
      clearIcon: {
        class: " right-[35px] dropdown-icon"
      },
      filterInput: {
        class: "dropdown-filter-input"
      },
      filterIcon: {
        class: "right-3 dropdown-icon"
      },
      panel: {
        class: "bg-white dark:bg-darkBg "
      },
      header: {
        class: "p-2 bg-inherit dropdown-text"
      },
      item: ({ context }: any) => ({
        class: context.selected
          ? "dropdown-item dropdown-item-selected"
          : context.focused
          ? "dropdown-item"
          : "dropdown-item"
      }),
      emptyMessage: {
        class: "p-4 dropdown-text"
      }
    };
  });

  const multiSelectStyle = computed(() => {
    return {
      ...dropdownStyle.value,
      header: {
        class:
          "flex items-center justify-between gap-2 p-2 bg-inherit dropdown-text"
      },
      item: ({ context }: any) => ({
        class: context.selected
          ? "flex items-center gap-2 dropdown-item dropdown-item-selected"
          : context.focused
          ? "flex items-center gap-2 dropdown-item"
          : "flex items-center gap-2 dropdown-item"
      }),
      label: {
        class: "px-4 dropdown-text flex items-center gap-1.5"
      },
      clearIcon: {
        class: "xs"
      },
      headerCheckboxContainer: {
        class: "dropdown-checkbox-container"
      },
      headerCheckbox: {
        class: "dropdown-checkbox ring-0"
      },
      checkboxContainer: {
        class: "dropdown-checkbox-container"
      },
      checkbox: {
        class: "dropdown-checkbox"
      },
      checkboxIcon: {
        class: "dropdown-checkbox "
      },
      token: {
        class: "dropdown-token"
      },
      tokenLabel: {
        class: "dropdown-token-label"
      },
      removeTokenIcon: {
        class: "dropdown-token-icon"
      }
    };
  });

  const datePickerStyle = computed(() => {
    return {
      input: { class: "input-style ring-0" },
      panel: { class: "bg-white dark:bg-darkBgSec dropdown-text p-3" },
      header: { class: "bg-white dark:bg-darkBgSec dropdown-text py-3.5" }
    };
  });
  return { dropdownStyle, multiSelectStyle, datePickerStyle };
};
