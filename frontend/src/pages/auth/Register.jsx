import { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Grid,
} from '@mui/material';
import { MuiPhone } from '@/components/PhoneInput';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    fatherName: '',
    motherName: '',
    mobileCode: '',
    mobileNumber: '',
    familydevataMandir: '',
    memberReference: '',
    templeName: '',
    address: '',
    district: '',
    state: '',
    pincode: '',
    phoneCode: '',
    phoneNumber: '',
    managedBy: '',
    mapLink: '',
  });

  const [devataMandirs, setDevataMandirs] = useState([]);
  const [memberReferences, setMemberReferences] = useState(
    []
  );

  const handleChange = (e) => {
    if (e?.target) {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      // When using third-party components like PhoneInput
      const { name, value } = e; // Adjust this based on the component's API
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    // Fetching Family Devata Mandir options from API
    axios
      .get('/api/devata-mandirs')
      .then((response) => setDevataMandirs(response.data))
      .catch((error) =>
        console.error(
          'Error fetching Devata Mandirs:',
          error
        )
      );

    // Fetching Member Reference options from API
    axios
      .get('/api/member-references')
      .then((response) =>
        setMemberReferences(response.data)
      )
      .catch((error) =>
        console.error(
          'Error fetching Member References:',
          error
        )
      );
  }, []);

  return (
    <Grid container className='min-h-screen h-[calc()]'>
      <Grid size={2} className='bg-brand-500 '></Grid>
      <Grid size={10} className='p-10'>
        <Box component='form' onSubmit={handleSubmit}>
          <Typography
            variant='h5'
            align='center'
            gutterBottom
            className='font-semibold mb-5'
          >
            Registration Form
          </Typography>
          <Grid container spacing={2}>
            <Grid size={4}>
              {/* Title */}
              <Stack direction={'row'}>
                <FormControl
                  fullWidth
                  size='small'
                  className='w-2/6'
                >
                  <InputLabel>Title</InputLabel>
                  <Select
                    label='Title'
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                  >
                    <MenuItem value='Mr'>Mr</MenuItem>
                    <MenuItem value='Ms'>Ms</MenuItem>
                    <MenuItem value='Mrs'>Mrs</MenuItem>
                    <MenuItem value='Dr'>Dr</MenuItem>
                  </Select>
                </FormControl>

                {/* Name */}
                <TextField
                  className='w-4/6'
                  label='Name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  size='small'
                  required
                />
              </Stack>
            </Grid>
            {/* Father Name */}
            <Grid size={4}>
              <TextField
                label="Father's Name"
                name='fatherName'
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Mother Name */}
              <TextField
                label="Mother's Name"
                name='motherName'
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              <MuiPhone
                name='mobile'
                value={formData.mobileNumber}
                onChange={handleChange}
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Family Devata Mandir */}
              <FormControl fullWidth size='small'>
                <InputLabel>
                  Family Devata Mandir
                </InputLabel>
                <Select
                  label='Family Devata Mandir'
                  name='familydevataMandir'
                  value={formData.familydevataMandir}
                  onChange={handleChange}
                >
                  {devataMandirs.map((mandir) => (
                    <MenuItem
                      key={mandir.id}
                      value={mandir.name}
                    >
                      {mandir.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={4}>
              {/* Member Reference */}
              <FormControl fullWidth size='small'>
                <InputLabel>Member Reference</InputLabel>
                <Select
                  label='Member Reference'
                  name='memberReference'
                  value={formData.memberReference}
                  onChange={handleChange}
                >
                  {memberReferences.map((member) => (
                    <MenuItem
                      key={member.id}
                      value={member.name}
                    >
                      {member.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid size={4}>
              {/* Temple Name */}
              <TextField
                label='Temple Name'
                name='templeName'
                value={formData.templeName}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Address */}
              <TextField
                label='Address'
                name='address'
                value={formData.address}
                onChange={handleChange}
                fullWidth
                multiline
                rows={2}
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* District */}
              <TextField
                label='District'
                name='district'
                value={formData.district}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* State */}
              <TextField
                label='State'
                name='state'
                value={formData.state}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Pincode */}
              <TextField
                label='Pincode'
                name='pincode'
                value={formData.pincode}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Phone Code & Number */}

              <MuiPhone
                size='small'
                name='phone'
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Managed By */}
              <TextField
                label='Managed By'
                name='managedBy'
                value={formData.managedBy}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>{' '}
            <Grid size={4}>
              {/* Map Link */}
              <TextField
                label='Map Link'
                name='mapLink'
                value={formData.mapLink}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>
          </Grid>
          <Grid size={4}>
            {/* Submit Button */}
            <Button
              type='submit'
              size='small'
              sx={{ mt: 2 }}
              className='text-white bg-brand-500'
            >
              Submit
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
