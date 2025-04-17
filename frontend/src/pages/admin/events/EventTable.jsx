import { DataGrid } from '@mui/x-data-grid';
import { Stack, IconButton } from '@mui/material';
import { RemoveRedEye } from '@mui/icons-material';

const EventTable = ({ rows, loading, onView }) => {
  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.5 },
    {
      field: 'templeId',
      headerName: 'Temple ID',
      flex: 1,
    },
    {
      field: 'eventDate',
      headerName: 'Event Date',
      flex: 1,
      valueGetter: (params) =>
        new Date(params.row.eventDate).toLocaleDateString(),
    },
    {
      field: 'details',
      headerName: 'Details',
      flex: 2,
    },
    {
      field: 'createdBy',
      headerName: 'Created By (User ID)',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Stack direction={'row'}>
          <IconButton
            className='text-blue-500'
            onClick={() => onView(params.row.id)}
          >
            <RemoveRedEye />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <DataGrid
      loading={loading}
      rows={rows}
      columns={columns}
      pageSize={10}
      disableRowSelectionOnClick
    />
  );
};

export default EventTable;
