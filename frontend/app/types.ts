export type Note = {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export interface RawState {
  raw: boolean;
  toggleRaw: () => void;
}
