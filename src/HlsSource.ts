import { createSource } from "./createSource";

export const HlsSource = createSource(async () => {
  const HLS = await import("hls.js");
  return HLS.default;
});
