export interface AppleState {
  apples: number;
}

export interface OrangeState {
  oranges: number;
}

export interface State {
  apples: {
    apples: number;
  };
  oranges: {
    oranges: number;
  };
}

export interface Action {
  type: string;
}
