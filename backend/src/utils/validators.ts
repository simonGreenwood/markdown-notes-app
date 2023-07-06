export const parseContent = (content: unknown): string => {
  if (!content || typeof content !== "string") {
    throw new Error("Incorrect or missing content");
  }
  return content;
};

export const parseUUID = (id: unknown): string => {
  if (!id || typeof id !== "string") {
    throw new Error("Incorrect or missing id");
  }
  return id;
};
