export default () => {
  const config = useRuntimeConfig();

  const BASE_URL = config.public.baseURL;
  const headers: {
    [key: string]: string;
  } = {
    Referer: "https://localhost"
  };
  if (process.client) {
    const { data } = useAuth();
    const user: any = data.value?.user;
    if (user?.accessToken) {
      headers["Authorization"] = `Bearer ${user.accessToken}`;
    }
  }

  /**
   * Get Request
   * @param endpoint
   * @param options
   * @returns Promise<T>
   */
  const get = async <T>(
    endpoint: string,
    options?: {
      [key: string]: any;
    }
  ) => {
    const { data } = useAuth();
    if (data.value?.user && !headers["Authorization"]) {
      headers["Authorization"] = `Bearer ${
        (data.value as any).user.accessToken
      }`;
    }
    return rawFetch<T>(endpoint, {
      ...options,
      headers
    });
  };

  /**
   * Post Request
   * @param endpoint
   * @param options
   * @returns Promise<T>
   */
  const rawFetch = async <T>(
    endpoint: string,
    options?: {
      [key: string]: any;
    }
  ) =>
    $fetch<T>(endpoint, {
      baseURL: BASE_URL,
      ...options
    });

  /**
   * Post Curry Function
   * @param method
   * @returns (endpoint: string, body: any, options?: { [key: string]: any; }) => Promise<T>
   */
  const postCurry =
    (method: "POST" | "PATCH" | "PUT" | "DELETE") =>
    async <T>(
      endpoint: string,
      body: any,
      options?: {
        [key: string]: any;
      }
    ) =>
      $fetch<T>(endpoint, {
        baseURL: BASE_URL,
        method,
        body,
        ...options,
        headers
      });

  /**
   * Post Request
   * @param endpoint
   * @param body
   * @param options
   * @returns Promise<T>
   */
  const post = postCurry("POST");

  /**
   * Patch Request
   * @param endpoint
   * @param body
   * @param options
   * @returns Promise<T>
   */
  const patch = postCurry("PATCH");

  /**
   * Put Request
   * @param endpoint
   * @param body
   * @param options
   * @returns Promise<T>
   */
  const put = postCurry("PUT");

  /**
   * Delete Request
   * @param endpoint
   * @param body
   * @param options
   * @returns Promise<T>
   */
  const destroy = postCurry("DELETE");

  return {
    get,
    rawFetch,
    post,
    patch,
    put,
    destroy
  };
};
