export default defineNuxtRouteMiddleware(async (to) => {
  const user = true;

  // Redirect the user to the login page
  if (!user) {
    return navigateTo({
      path: "/auth",
      query: {
        redirect: to.fullPath
      }
    });
  }
});
