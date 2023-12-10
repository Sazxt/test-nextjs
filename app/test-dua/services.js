import { Input } from 'postcss';
import styles from './styles.module.css'
import Image from 'next/image';

import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]
export default function Service()
{
    return (<div className="flex gap-2 mt-4">
        <a href="#" className="p-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <DataTable
                columns={columns}
                data={data}
                dense
                direction="auto"
                fixedHeader
                fixedHeaderScrollHeight="300px"
                pagination
                responsive
                subHeaderAlign="right"
                subHeaderWrap
            />
        </a>
    </div>);
}