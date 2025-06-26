import Pagination from "./Pagination";
import { PaginationGap } from "./PaginationGap";
import { PaginationList } from "./PaginationList";
import { PaginationNext } from "./PaginationNext";
import PaginationPage from "./PaginationPage";
import PaginationPrevious from "./PaginationPrevious";

export default function ExamplePagination() {
  return (
    <Pagination>
      <PaginationPrevious href="?page=2" />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3" current>
          3
        </PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=4" />
    </Pagination>
  )
}