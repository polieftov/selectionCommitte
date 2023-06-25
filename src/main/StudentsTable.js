import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';


const data = [
    //data definitions...
    {
        userId: '3f25309c-8fa1-470f-811e-cdb082ab9017', //we'll use this as a unique row id
        firstName: 'Dylan',
        lastName: 'Murray',
        age: 22,
        address: '261 Erdman Ford',
        city: 'East Daphne',
        state: 'Kentucky',
    },
    {
        userId: 'be731030-df83-419c-b3d6-9ef04e7f4a9f',
        firstName: 'Raquel',
        lastName: 'Kohler',
        age: 18,
        address: '769 Dominic Grove',
        city: 'Columbus',
        state: 'Ohio',
    },
    //end
];

const StudentsTable = () => {
    const columns = useMemo(
        //column definitions...
        () => [
            {
                accessorKey: 'firstName',
                header: 'Фамилия Имя Отчество',
            },
            {
                accessorKey: 'lastName',
                header: 'Номер направления (специальности)',
            },
            {
                accessorKey: 'age',
                header: 'Название института',
            },
            {
                accessorKey: 'address',
                header: 'Академическая группа',
            },
            {
                accessorKey: 'city',
                header: 'Дата Рождения',
            },
            {
                accessorKey: 'state',
                header: 'Мед.карта',
            },
            {
                accessorKey: 'state',
                header: 'Физ. подготовка (Да/Нет)',
            },
            {
                accessorKey: 'state',
                header: 'Средний балл',
            },
            {
                accessorKey: 'state',
                header: 'Проф.псих. пригодность',
            },
            {
                accessorKey: 'state',
                header: 'Военкомат',
            },
            {
                accessorKey: 'state',
                header: 'ВУС',
            },
            {
                accessorKey: 'state',
                header: 'Заялвение',
            },
            {
                accessorKey: 'state',
                header: 'Паспорт',
            },
            {
                accessorKey: 'state',
                header: 'Св-во о рождении',
            },
            {
                accessorKey: 'state',
                header: 'Зачетная книжка',
            },
            {
                accessorKey: 'state',
                header: 'Студ.билет',
            },
            {
                accessorKey: 'state',
                header: 'Характеристика',
            },
            {
                accessorKey: 'state',
                header: 'Автобиография',
            },
            {
                accessorKey: 'state',
                header: 'Справка о судим.',
            },
            {
                accessorKey: 'state',
                header: 'Приписное',
            },
            {
                accessorKey: 'state',
                header: 'Фото',
            },
            {
                accessorKey: 'state',
                header: 'Мед.осв.',
            },
            {
                accessorKey: 'state',
                header: 'Профотбор',
            },
            {
                accessorKey: 'state',
                header: 'Анкета',
            },
        ],
        [], //end
    );

    const [rowSelection, setRowSelection] = useState({});

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            getRowId={(row) => row.userId}
            muiTableBodyRowProps={({ row }) => ({
                //implement row selection click events manually
                onClick: () =>
                    setRowSelection((prev) => ({
                        ...prev,
                        [row.id]: !prev[row.id],
                    })),
                selected: rowSelection[row.id],
                sx: {
                    cursor: 'pointer',
                },
            })}
            state={{ rowSelection }}
        />
    );
};

// <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//             <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell align="right">Age</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//             {rows.map((row) => (
//                 <TableRow
//                     key={row.name}
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                     <TableCell component="th" scope="row">
//                         {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.age}</TableCell>
//                 </TableRow>
//             ))}
//         </TableBody>
//     </Table>
// </TableContainer>

export default StudentsTable;