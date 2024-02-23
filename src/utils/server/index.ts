import type { AstroGlobal } from "astro";

export type ActionReturnType<T> = Promise<{
  response?: Response;
  data?: T;
}>;

export type CallbackAction<T> = () => Promise<T>;

export const action = async <T>(
  Astro: AstroGlobal,
  actionFn: CallbackAction<T>
): ActionReturnType<T> => {
  if (Astro.request.method === "POST") {
    const isClientRequest =
      Astro.request.headers.get("accept") === "application/json";

    const data: T = await actionFn();

    if (isClientRequest) {
      const response = new Response(JSON.stringify(data));

      return { response, data };
    }

    return { data };
  }

  return { data: undefined };
};
