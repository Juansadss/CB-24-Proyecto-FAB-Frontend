// @ts-nocheck
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";
import { PlusIcon } from "./PlusIcon";
import { VerticalDotsIcon } from "./VerticalDotsIcon";
import { ChevronDownIcon } from "./ChevronDownIcon";
import { SearchIcon } from "./SearchIcon";
import { columns, pieces, statusOptions, data} from "./data";
import { capitalize } from "./utils";
import "./styles.css";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Programado: "success",
  Proximo: "danger",
  Retrasado: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

export default function App() 
{

  const navigate = useNavigate(); // Hook de navegación

  const [showDialog, setShowDialog] = useState(false);
  const [newPiece, setNewPiece] = useState({
    pieza: '',
    categoria: '',
    estado: '',
    descripcion: '',
    ubicacion: ''
  });
  const [selectedPiece, setSelectedPiece] = useState(null); // Estado para la pieza seleccionada
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setSelectedPiece(null);
    setShowDialog(true);
  };

  const handleShowDialog = () => {
    setShowDialog(true);
  };

  const handlePieceSelect = (piece) => {
    setSelectedPiece(piece);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setNewPiece({ pieza: '', categoria: '', estado: '', descripcion: '', ubicacion: '' });
    setChecked(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPiece({ ...newPiece, [name]: value });
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleEdit = (piece) => {
    setSelectedPiece(piece);
    setNewPiece(piece);
    setShowDialog(true);
  };

  
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelect = (item) => {
    const selectedIndex = selectedItems.indexOf(item);  
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, item]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(selectedIndex, 1);
      setSelectedItems(updatedItems);
    }
  };
  const isItemSelected = (item) => {
  return selectedItems.includes(item);  
};

const handlePieceClick = (user) => {
  navigate("/Inspection2", { state: { user } });
};






  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(pieces.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredpieces = [...pieces];

    if (hasSearchFilter) {
      filteredpieces = filteredpieces.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredpieces = filteredpieces.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredpieces;
  }, [pieces, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: User, b: User) => {
      const first = a[sortDescriptor.column as keyof User] as number;
      const second = b[sortDescriptor.column as keyof User] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <Link to="/Inspection2">
      <User
        avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
        classNames={{
          Descripcion: "text-default-500",
        }}
        Descripcion={user.Descripcion}
        name={user.name}
      />
    </Link>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown className="bg-background border-1 border-default-200">
                <DropdownTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-400" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                <DropdownItem>
                  <Link to="/Inspection" >
                    Ver
                  </Link>
                </DropdownItem>
                  <DropdownItem>Editar</DropdownItem>
                  <DropdownItem>Borrar</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Buscar por nombre..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Estado
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Filtrar por:
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
              onClick={handleClick}
            >
              Agregar
            </Button>
          
          
          </div>
        
        
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {pieces.length} piezas
          </span>
          <label className="flex items-center text-default-400 text-small">
            Items por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    pieces.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
          <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} seleccionados`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: [
        "max-h-[382px]",
        "max-w-3xl",
        "bg-blue-500", // Fondo azul para la tabla
        "text-white", // Texto blanco
      ],
      th: [
        "bg-blue-600", // Fondo azul más oscuro para cabeceras
        "text-white", // Texto blanco
        "border-b", // Borde inferior
        "border-divider",
      ],
      td: [
        "border-b", // Borde inferior
        "border-divider",
      ],
    }),
    []
  );

  return (
    <><>
      <h1 
      id="title1">
        <b>MANTENIMIENTO</b> - Control de Componentes
      </h1>
      <Table
        id="table1"
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No pieces found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showDialog && (
   <div className="dialog">
   <div className="dialog-header">
      <Button onClick={handleCloseDialog} className="close-button">
          X
        </Button>
   </div>
   <div className="dialog-content">
     <h2>Detalles de la pieza</h2>
     <Table>
       <TableHeader>
         <TableColumn className="custom-column"></TableColumn> {/*Checkbox*/}
         <TableColumn className="custom-column">PIEZA</TableColumn>
         <TableColumn className="custom-column">CATEGORÍA</TableColumn>
         <TableColumn className="custom-column">ESTADO</TableColumn>
         <TableColumn className="custom-column">DESCRIPCIÓN</TableColumn>
         <TableColumn className="custom-column">UBICACIÓN</TableColumn>
       </TableHeader>
       <TableBody>
         {data.map((item, index) => (
           <TableRow key={index}>
             <TableCell className="custom-table-cell">
               <label className="checkbox-container">
                 <input type="checkbox" className="checkbox-input" id="myCheckbox" />
                 <span className="checkmark"></span>
               </label>
             </TableCell>
             <TableCell className="custom-table-cell">{item.pieza}</TableCell>
             <TableCell className="custom-table-cell">{item.categoria}</TableCell>
             <TableCell className={`custom-table-cell ${item.estado.toLowerCase()}`}>{item.estado}</TableCell>
             <TableCell className="custom-table-cell">{item.descripcion}</TableCell>
             <TableCell className="custom-table-cell">{item.ubicacion}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
     <div className="dialog-buttons">
       <Button color="success">Agregar</Button>
       <Button color="primary">Actualizar</Button>
     </div>
   </div>
 </div>
      )}
    </><footer> <img id="logoFoto" src="logo.png" alt="" /> </footer></>
  );
}

