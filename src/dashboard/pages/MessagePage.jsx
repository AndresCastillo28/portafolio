import React, { useEffect, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import portafolioApi from "../../api/portafolioApi";

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const MessagePage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await portafolioApi.get(
          "/contact-information/by-created-date"
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(data.length / rowsPerPage);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <>
      <div className="w-screen mt-5">
        <div className="w-3/4 mx-auto">
          <Table
            color="dark"
            selectionMode="multiple"
            defaultSelectedKeys={["2", "3"]}
            aria-label="Example static collection table"
            css={{ width: "100%" }}
            bottomContent={
              <div className="flex w-full justify-center">
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="secondary"
                  page={page}
                  initialPage={1}
                  total={pages}
                  onChange={(page) => setPage(page)}
                />
              </div>
            }
          >
            <TableHeader>
              <TableColumn key="name">NAME</TableColumn>
              <TableColumn key="email">EMAIL</TableColumn>
              <TableColumn key="message">MESSAGE</TableColumn>
              <TableColumn key="createdDate">DATE</TableColumn>
            </TableHeader>
            <TableBody
              items={currentData}
              isLoading={isLoading}
              loadingContent={<Spinner label="Loading..." />}
            >
              {(item, index) => (
                <TableRow key={index}>
                  {(columnKey) => (
                    <TableCell>
                      {columnKey === "createdDate"
                        ? formatDate(getKeyValue(item, columnKey))
                        : getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};
