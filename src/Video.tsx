import { forwardRef, SyntheticEvent } from "react";
import { BaseProps } from "./types";

export type VideoProps = BaseProps & {
  readonly onNativeError?: OnNativeError;
};

export type OnNativeError = (event: SyntheticEvent<HTMLVideoElement>) => void;

export const Video = forwardRef<HTMLVideoElement, VideoProps>(({ source, onNativeError, ...props }, ref) => (
  <video ref={ref} src={source} onError={onNativeError} {...props} />
));
