import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const noopStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

type ExecuteState = {
  done: Record<string, boolean>;
  toggle: (id: string) => void;
};

export const useExecuteStore = create<ExecuteState>()(
  persist(
    (set, get) => ({
      done: {},
      toggle: (id) =>
        set({
          done: { ...get().done, [id]: !get().done[id] },
        }),
    }),
    {
      name: "logon-execute",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? noopStorage : localStorage,
      ),
    },
  ),
);
