export const createSource = <T>(loader: () => Promise<T>) => {
  const suspender = loader().then(
    value => {
      state = "done";
      result = value;
    },
    error => {
      state = "error";
      result = error;
    }
  );

  let state: "pending" | "done" | "error" = "pending";
  let result: T;

  const read = (): T => {
    switch (state) {
      case "pending": {
        throw suspender;
      }
      case "error": {
        throw result;
      }
      case "done": {
        return result;
      }
    }
  };

  return { read };
};
