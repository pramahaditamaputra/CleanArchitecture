import {create} from 'zustand';

interface ICounterStore {
  count: number;
  increment(): void;
  decrement(): void;
}

export const useCounterStore = create<ICounterStore>(set => ({
  count: 0,
  increment: () => set(state => ({count: state.count + 1})),
  decrement: () => set(state => ({count: state.count - 1})),
}));
