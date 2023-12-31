import {create} from 'zustand';

interface ISharedModalStore {
  isVisible: boolean;
  setIsVisible: () => void;
}

export const useSharedModalStore = create<ISharedModalStore>(set => ({
  isVisible: false,
  setIsVisible: () => set(state => ({isVisible: !state.isVisible})),
}));
