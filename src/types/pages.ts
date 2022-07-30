export interface IPagesProps {
  page: number;
  incrementPage: () => void;
  decrementPage: () => void;
  totalPages: number | undefined;
}
