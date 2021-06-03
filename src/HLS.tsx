import type { ErrorData, HlsConfig } from "hls.js";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { HlsSource } from "./HlsSource";
import { BaseProps } from "./types";
import { Video } from "./Video";

export type OnHlsError = (error: ErrorData) => void;

const defaultHlsErrorHandler: OnHlsError = error => console.error(error);

export type HLSProps = BaseProps & {
  readonly config?: HlsConfig;
  readonly onHlsError?: OnHlsError;
};

export const HLS = forwardRef<HTMLVideoElement, HLSProps>(({ source, config, onHlsError = defaultHlsErrorHandler, ...props }, ref) => {
  const elementRef = useRef<HTMLVideoElement>(null);
  const hlsConfig = useRef(config);
  const errorHandlerRef = useRef<OnHlsError>();
  errorHandlerRef.current = onHlsError;

  useEffect(() => {
    if (!source) {
      return;
    }

    const HLS = HlsSource.read();

    const hls = new HLS(hlsConfig.current);
    hls.on(HLS.Events.ERROR, (event, data) => errorHandlerRef.current!(data));

    hls.loadSource(source);
    hls.attachMedia(elementRef.current!);

    return () => {
      hls.destroy();
    };
  }, [source]);

  useImperativeHandle(ref, () => elementRef.current!, [source]);

  return <Video ref={elementRef} {...props} />;
});
