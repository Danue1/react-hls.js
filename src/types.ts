import { CSSProperties } from "react";

export type BaseProps = {
  readonly source?: string;
  readonly autoPlay?: boolean;
  readonly controls?: boolean;
  readonly loop?: boolean;
  readonly muted?: boolean;
  readonly preload?: string;
  readonly className?: string;
  readonly style?: CSSProperties;
};
