export declare namespace Language {
  interface Data {
    id: number;
    name: string;
  }

  namespace Create {
    interface Params {
      name: string;
    }
  }
  namespace All {
    interface Search {
      search?: string;
    }
  }
}
