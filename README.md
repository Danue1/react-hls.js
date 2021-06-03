# React hls.js

## Examples

```tsx
import React from "react";
import ReactDOM from "react-dom";
import ReactHls from "react-hls.js";

const App = () => (
  <Suspense fallback="loading...">
    <ReactHls source={HLS_URL} />
  </Suspense>
);
ReactDOM.render(<App />, document.getElementById("root"));
```
