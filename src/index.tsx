import { forwardRef } from "react";
import { HLS, HLSProps } from "./HLS";
import { HlsSource } from "./HlsSource";
import { Video, VideoProps } from "./Video";

export { HLSProps, OnHlsError } from "./HLS";
export { BaseProps } from "./types";
export { OnNativeError, VideoProps } from "./Video";
export type HlsVideoProps = HLSProps & VideoProps;

export const ReactHls = forwardRef<HTMLVideoElement, HlsVideoProps>((props, ref) => {
  const Component = HlsSource.read().isSupported() ? HLS : Video;
  return <Component ref={ref} {...props} />;
});

export default ReactHls;
