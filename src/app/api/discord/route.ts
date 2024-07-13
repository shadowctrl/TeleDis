export const POST = async (request: Request) => {
  const res = await request.json();
  await fetch(
    "https://discord.com/api/webhooks/1261664114128719902/Hu8oxb3glMc-BjP0l5zYb4HvyOZnnzQ7iqloHSYYUZn_uPxhVbUpbDaxGUvp-4J_RUW1",

    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: res,
      }),
    }
  );
  return new Response("Discord Bot Running", { status: 200 });
};
