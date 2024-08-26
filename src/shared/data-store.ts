import { create } from "zustand";
import auctionData from "@/data/auction_name.json";

interface AuctionItem {
  a: string;
  c: number;
  b: string;
}

interface ConnectData {
  data: AuctionItem[];
  filteredData: AuctionItem[];
  page: number;
  pageSize: number;
  search: string;
  displayData: AuctionItem[];
  actions: {
    setData: (newData: AuctionItem[]) => void;
    setFilteredData: (newFilteredData: AuctionItem[]) => void;
    setPage: (page: number) => void;
    setPageSize: (pageSize: number) => void;
    setSearch: (search: string) => void;
    setDisplayData: (display: AuctionItem[]) => void;
  };
}

const useActionStore = create<ConnectData>((set) => ({
  data: auctionData,
  filteredData: [],
  page: 1,
  pageSize: 100,
  search: "",
  displayData: [],
  actions: {
    setData: (newData) => set({ data: newData }),
    setFilteredData: (newFilteredData) =>
      set({ filteredData: newFilteredData }),
    setPage: (page) => set({ page }),
    setPageSize: (pageSize) => set({ pageSize }),
    setSearch: (search) => set({ search }),
    setDisplayData: (display) => set({ displayData: display }),
  },
}));

export const useAuctionData = () => useActionStore((state) => state.data);
export const useFilteredData = () =>
  useActionStore((state) => state.filteredData);
export const usePage = () => useActionStore((state) => state.page);
export const usePageSize = () => useActionStore((state) => state.pageSize);
export const useSearch = () => useActionStore((state) => state.search);
export const useDisplayData = () =>
  useActionStore((state) => state.displayData);

export const useSetActionsData = () => useActionStore((state) => state.actions);
