import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Grid,
  Divider,
  Stack,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const EventDrawer = ({ open, onClose, event }) => {
  return (
    <Drawer anchor='right' open={open} onClose={onClose}>
      <Box className='w-[400px] p-5 relative'>
        <IconButton
          onClick={onClose}
          className='text-gray-700 hover:text-gray-950 absolute top-5 right-5'
        >
          <CloseIcon />
        </IconButton>

        <Stack
          direction={'row'}
          gap={2}
          alignItems={'center'}
          flexWrap={'wrap'}
        >
          <Typography
            variant='h5'
            mb={2}
            className='font-bold'
          >
            Event Information
          </Typography>
        </Stack>
        <Divider className='mb-5' />

        {event ? (
          <Stack spacing={2}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 'bold' }}
                >
                  {event?.mandirName}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body1'
                  color='textSecondary'
                >
                  <strong>Diety:</strong> {event?.dietyName}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  <strong>Description:</strong>{' '}
                  {event?.description ||
                    'No description available.'}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body1'
                  color='textSecondary'
                >
                  <strong>Address:</strong>{' '}
                  {event?.address ||
                    'No address available.'}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body1'
                  color='textSecondary'
                >
                  <strong>State:</strong> {event?.state}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body1'
                  color='textSecondary'
                >
                  <strong>District:</strong>{' '}
                  {event?.district}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body1'
                  color='textSecondary'
                >
                  <strong>Pincode:</strong> {event?.pincode}
                </Typography>
              </Grid>
              <Grid item size={12}>
                <Typography
                  variant='body1'
                  color='textSecondary'
                >
                  <strong>Phone:</strong> {event?.phoneCode}{' '}
                  {event?.phoneNumber}
                </Typography>
              </Grid>
              {event?.mapLink && (
                <Grid item size={12}>
                  <Button
                    variant='contained'
                    color='primary'
                    href={event?.mapLink}
                    target='_blank'
                    sx={{ width: '100%' }}
                  >
                    View on Map
                  </Button>
                </Grid>
              )}
            </Grid>
          </Stack>
        ) : (
          <Typography variant='body1' color='textSecondary'>
            No event selected.
          </Typography>
        )}
      </Box>
    </Drawer>
  );
};

export default EventDrawer;
