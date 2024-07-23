import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import ApiRoutes from "~~/constant/ApiRoutes";
import useFetchApi from "~/composables/useFetchApi";

const getUserData = async (
  token: string
): Promise<Pick<AuthUserDataResponse, "data">> => {
  const user = await useFetchApi().rawFetch<AuthUserDataResponse>(
    ApiRoutes.user.me,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  if (!user) {
    throw createError({
      message: "User not found",
      statusCode: 404
    });
  }

  if (!user.result) {
    throw createError({
      message: "User not found",
      statusCode: 404
    });
  }

  return {
    data: user.data
  };
};

export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          // Get JWT token from API endpoint using credentials
          const res = await useFetchApi().post<SignInResponse>(
            ApiRoutes.auth.signIn,
            {
              email: credentials.email,
              password: credentials.password,
              rememberMe: credentials.rememberMe || false
            }
          );
          if (res.result && res.data.token) {
            return {
              accessToken: res.data.token,
              status: undefined
            };
          } else {
            throw createError({
              statusCode: 403,
              statusMessage: "Credentials not working"
            });
          }
          // Return user data
        } catch (err: any) {
          console.log("err in NuxtAuthHandler: ", err);
          throw createError({
            message: err.data.message,
            statusCode: err.status
          });
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async jwt({ token, user, account }) {
      // This is true when the user is signing in for the first time
      if (user) {
        token = {
          ...token,
          ...user
        };
      }
      return token;
    },
    // disable type checking for session callback
    // @ts-expewdewct-errored
    async session({ session, token, user }) {
      try {
        const newData = await getUserData(token.accessToken as string);

        // return null;
        if (!newData.data.user) {
          return null;
        }

        (session as any).user = {
          ...session.user,
          ...token,
          ...newData.data.user,
          roles: newData.data.roles
        };

        // return null;
        return Promise.resolve(session as any);

        // return session as any;
      } catch (err: any) {
        console.log("err in session callback: ");
        throw createError({
          message: err.data.message,
          statusCode: err.status
        });
      }
    }
  },

  events: {
    // Signs out the user from the API Server
    async signOut({ token }) {
      await useFetchApi().rawFetch<unknown>(ApiRoutes.auth.signOut, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.accessToken}`
        }
      });
    }
  }
});
