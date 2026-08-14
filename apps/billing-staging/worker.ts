const upstreamOrigin = "https://billing-staging.xmcl-page.pages.dev";
const routePrefix = "/billing-staging";

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const isOAuthCallback = url.pathname === "/oauth/callback";
    if (
      (!url.pathname.startsWith(`${routePrefix}/`) && !isOAuthCallback) ||
      (request.method !== "GET" && request.method !== "HEAD")
    ) {
      return new Response("Not Found", { status: 404 });
    }
    if (isOAuthCallback) {
      return new Response(null, {
        status: 302,
        headers: {
          "Cache-Control": "no-store",
          Location: `${url.origin}${routePrefix}/en/oauth/callback${url.search}`,
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }
    const upstreamPath = `${url.pathname.slice(routePrefix.length)}${url.search}`;
    const upstreamUrl = new URL(upstreamPath, upstreamOrigin);
    const upstream = await fetch(upstreamUrl, {
      method: request.method,
      headers: { Accept: request.headers.get("Accept") ?? "*/*" },
      redirect: "follow",
      cache: "no-store",
    });
    const headers = new Headers(upstream.headers);
    headers.set("Cache-Control", "no-store");
    headers.set("X-Robots-Tag", "noindex, nofollow");
    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers,
    });
  },
};
