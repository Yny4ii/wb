"use client";
import React from "react";
import { Advert } from "../../../api/interfaces/Advert";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Th from "@/components/table/Th/Th";
import Td from "@/components/table/td/Td";
import Bet from "@/components/table/bet/Bet";
import LinkIcon from "@/components/icons/LinkIcon";
import CopyIcon from "@/components/icons/CopyIcon";
import Pagination from "@/components/pagination/Pagination";
import Image from "next/image";

interface ITableProps {
  data: Advert[];
}

const Table = ({ data }: ITableProps) => {
  const columnHelper = createColumnHelper<Advert>();
  const columns = [
    columnHelper.accessor("position", {
      header: "Место",
      cell: ({ row }) => {
        return <>{row.original.position}</>;
      },
    }),
    columnHelper.accessor("image", {
      header: "Фото",
      cell: ({ row }) => {
        return (
          <Image width={50} height={65} src={row.original.image} alt={row.original.article.toString()} />
        );
      },
    }),
    columnHelper.accessor("article", {
      header: "Артикул",
      cell: ({ row }) => {
        return (
          <a href={row.original.url}>
            <LinkIcon />
            {row.original.article}
            <CopyIcon />
          </a>
        );
      },
    }),
    {
      header: "Позиция",
      accessorKey: "position_on_page",
    },
    columnHelper.accessor("cpm", {
      header: "Ставка",
      cell: ({ row }) => {
        return <Bet>{row.original.cpm} ₽</Bet>;
      },
    }),
    columnHelper.accessor("subject.name", {
      header: "Категория",
      cell: ({ row }) => {
        return <>{row.original.subject.name}</>;
      },
    }),
    columnHelper.accessor("delivery_time", {
      header: "Доставка",
      cell: ({ row }) => {
        return <>{row.original.delivery_time} ч</>;
      },
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
  });
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={table.getState().pagination.pageIndex + 1}
        pageCount={table.getPageCount()}
        onClick={table.setPageIndex}
      />
    </div>
  );
};

export default Table;
