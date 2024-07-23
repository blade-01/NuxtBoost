/**
 * Only allow admin users to access the page
 */

export default defineNuxtRouteMiddleware((to, from) => {
  const { $i18n } = useNuxtApp();

  // Get user data from the session
  const { data } = useAuth();

  // console.log("data.value", data.value);

  // If user is not admin then abort the navigation
  if (!data.value || !(data.value as any).user?.roles.includes("admin")) {
    throw showError({
      statusCode: 403,
      statusMessage: $i18n.t("error.403.title"),
      message: $i18n.t("error.403.description"),
      fatal: true,
    });
  }
});
