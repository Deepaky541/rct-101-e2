import React from "react";
import { Button,Select,ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";

const Pagination = ({ totalcount, oncall, onlimitt }) => {

    const [page, setpage] = useState(1);
    const [limit, setlimit] = useState(3);

    const prev = () => {
      if (page > 1) {
        setpage(page - 1);
        oncall(page);
      }
    };
    const next = () => {
      if (totalcount < page * limit) {
        setpage(page + 1);
        oncall(page);
      }
    };
    const firstpage = () => {
      setpage(1);
      oncall(page);
    };
    const lastpage = () => {
      setpage(Math.ceil(totalcount / limit));
      oncall(page);
    };
    const onlimit = (e) => {
      setlimit(Number(e.target.value));
      onlimitt(limit);
    };


  return (
    <ButtonGroup>
      <Button
        data-cy="pagination-first-button"
        disabled={page <= 1}
        onClick={firstpage}
      >
        first page
      </Button>
      <Button
        data-cy="pagination-previous-button"
        disabled={page <= 1}
        onClick={prev}
      >
        prev
      </Button>
      <Select data-cy="pagination-limit-select" onChange={onlimit}>
        <option data-cy="pagination-limit-3" value={3}>
          3
        </option>
        <option data-cy="pagination-limit-6" value={3}>
          6
        </option>
        <option data-cy="pagination-limit-9" value={3}>
          9
        </option>
      </Select>
      <Button
        data-cy="pagination-next-button"
        disabled={totalcount < page * limit}
        onClick={next}
      >
        next
      </Button>
      <Button
        data-cy="pagination-last-button"
        disabled={totalcount < page * limit}
        onClick={lastpage}
      >lastpage</Button>
    </ButtonGroup>
  );
};

export default Pagination;
