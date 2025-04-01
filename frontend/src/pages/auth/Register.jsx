import { useState } from 'react';
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
} from '@mui/material';
import { MuiPhone } from '@/components/PhoneInput';

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

  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
        maxWidth: 800,
        mx: 'auto',
        mt: 5,
        p: 4,
        borderRadius: 3,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        bgcolor: 'background.paper',
      }}
    >
      <Typography
        variant='h5'
        align='center'
        gutterBottom
        className='font-semibold'
      >
        Registration Form
      </Typography>

      <Stack spacing={2}>
        {/* Title */}
        <Stack direction={'row'}>
          <FormControl
            fullWidth
            size='small'
            className='w-1/6'
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
            className='w-5/6'
            label='Name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            fullWidth
            size='small'
            required
          />
        </Stack>

        {/* Father Name */}
        <TextField
          label="Father's Name"
          name='fatherName'
          value={formData.fatherName}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Mother Name */}
        <TextField
          label="Mother's Name"
          name='motherName'
          value={formData.motherName}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        <MuiPhone
          name='mobile'
          value={formData.mobileNumber}
          onChange={handleChange}
          size='small'
        />
        {/* Family Devata Mandir */}
        <TextField
          label='Family Devata Mandir'
          name='familydevataMandir'
          value={formData.familydevataMandir}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Member Reference */}
        <TextField
          label='Member Reference'
          name='memberReference'
          value={formData.memberReference}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Temple Name */}
        <TextField
          label='Temple Name'
          name='templeName'
          value={formData.templeName}
          onChange={handleChange}
          fullWidth
          size='small'
        />

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

        {/* District */}
        <TextField
          label='District'
          name='district'
          value={formData.district}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* State */}
        <TextField
          label='State'
          name='state'
          value={formData.state}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Pincode */}
        <TextField
          label='Pincode'
          name='pincode'
          value={formData.pincode}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Phone Code & Number */}

        <MuiPhone
          size='small'
          name='phone'
          value={formData.mobileNumber}
          onChange={handleChange}
        />

        {/* Managed By */}
        <TextField
          label='Managed By'
          name='managedBy'
          value={formData.managedBy}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Map Link */}
        <TextField
          label='Map Link'
          name='mapLink'
          value={formData.mapLink}
          onChange={handleChange}
          fullWidth
          size='small'
        />

        {/* Submit Button */}
        <Button
          type='submit'
          size='small'
          sx={{ mt: 2 }}
          className='text-white bg-green-500'
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default Register;
