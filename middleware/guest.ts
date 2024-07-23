export default defineNuxtRouteMiddleware(() => {
  // Get the current session status from nuxt-auth
  const { status } = useAuth();

  // Localize the path for the current locale
  const localPath = useLocalePath();

  // If the user is authenticated, redirect to the index page
  if (status.value === "authenticated") {
    return navigateTo(
      localPath({
        name: "index"
      })
    );
  }
});
