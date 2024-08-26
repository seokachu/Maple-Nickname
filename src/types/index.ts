export interface AuctionItem {
  a: string;
  c: number;
  b: string;
}

export interface ConnectData {
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

export interface SelectedDateProps {
  selectedDate: string;
}
