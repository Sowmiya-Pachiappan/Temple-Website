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
  Snackbar,
  Alert,
  Divider,
} from '@mui/material';
import { MuiPhone } from '@/components/PhoneInput';
import Image from '@/assets/images/registerImage.jpg';
import { getUsers } from '@/api/userApi';
import { getTemples } from '@/api/templeApi';
import { register } from '@/api/authApi';
import AddTemple from '../temple/AddTemple';
import { useNavigate } from 'react-router';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    fatherName: '',
    motherName: '',
    mobileCode: '+91',
    mobileNumber: '',
    email: '',
    password: '',
    familyDevataMandir: '',
    memberReference: '',
  });

  const [error, setError] = useState('');
  const [showErrorAlert, setShowErrorAlert] =
    useState(false);

  const [showSuccessAlert, setShowSuccessAlert] =
    useState(false);
  const [devataMandirs, setDevataMandirs] = useState([]);
  const [memberReferences, setMemberReferences] = useState(
    []
  );
  const [showAddTemple, setShowAddTemple] = useState(false);
  const handleChange = (e) => {
    if (e?.target) {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      const { name, value } = e;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await register({
        ...formData,
        role: 'user',
      });

      setShowSuccessAlert(true);
      const { user, token } = res.data;
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token);
      window.location.href = '/';
    } catch (err) {
      const message =
        err.response?.data?.message || err.message;
      setError(message);
      setShowErrorAlert(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      const userRes = await getUsers();
      setMemberReferences(userRes?.data?.users);
      const templeRes = await getTemples();
      setDevataMandirs(templeRes?.data?.temples);
    } catch (err) {
      const message =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.error ||
        err?.message;
      setError(message);
      setShowErrorAlert(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const closeHandler = () => {
    setShowErrorAlert(false);
    setShowSuccessAlert(false);
  };
  const addFamilyDevataMandir = () => {
    setShowAddTemple(true);
  };
  const closeAddTempleHandler = () => {
    setShowAddTemple(false);
    navigate('/');
  };
  return (
    <Grid
      container
      className='min-h-screen h-full'
      alignItems='stretch'
    >
      <AddTemple
        onClose={closeAddTempleHandler}
        open={showAddTemple}
        setOpen={setShowAddTemple}
      />
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={closeHandler}
      >
        <Alert
          severity='error'
          onClose={closeHandler}
          className='mb-10'
        >
          {error}
        </Alert>
      </Snackbar>

      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={closeHandler}
      >
        <Alert
          severity='success'
          onClose={closeHandler}
          className='mb-10'
        >
          Account is registered successfully
        </Alert>
      </Snackbar>

      <Grid size={4}>
        <img
          src={Image}
          alt='Register Visual'
          className='h-full object-cover w-full'
        />
      </Grid>

      <Grid size={8} className='p-10'>
        <Box component='form' onSubmit={handleSubmit}>
          <Typography
            variant='h5'
            gutterBottom
            className='font-semibold mb-5'
          >
            Join the Divine Circle
          </Typography>
          <Grid container spacing={2}>
            {/* Title and Name */}
            <Grid size={6}>
              <Stack direction={'row'}>
                <FormControl
                  fullWidth
                  size='small'
                  className='flex-1/2'
                >
                  <InputLabel>Title</InputLabel>
                  <Select
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    label='Title'
                  >
                    <MenuItem value='Mr'>Mr</MenuItem>
                    <MenuItem value='Ms'>Ms</MenuItem>
                    <MenuItem value='Mrs'>Mrs</MenuItem>
                    <MenuItem value='Dr'>Dr</MenuItem>
                  </Select>
                </FormControl>
                <TextField
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

            <Grid size={6}>
              <TextField
                label="Father's Name"
                name='fatherName'
                value={formData.fatherName}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>

            <Grid size={6}>
              <TextField
                label="Mother's Name"
                name='motherName'
                value={formData.motherName}
                onChange={handleChange}
                fullWidth
                size='small'
              />
            </Grid>

            {/* Phone */}
            <Grid size={6}>
              <MuiPhone
                value={`+${formData.mobileCode}${formData.mobileNumber}`}
                onChange={({
                  mobileCode,
                  mobileNumber,
                }) => {
                  setFormData((prev) => ({
                    ...prev,
                    mobileCode,
                    mobileNumber,
                  }));
                }}
                size='small'
              />
            </Grid>

            {/* Email */}
            <Grid size={6}>
              <TextField
                label='Email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
                size='small'
                required
              />
            </Grid>

            {/* Password */}
            <Grid size={6}>
              <TextField
                label='Password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
                fullWidth
                size='small'
                required
              />
            </Grid>

            {/* Family Devata Mandir */}
            <Grid size={6}>
              <FormControl fullWidth size='small'>
                <InputLabel>
                  Family Devata Mandir
                </InputLabel>
                <Select
                  label='Family Devata Mandir'
                  name='familyDevataMandir'
                  value={formData.familyDevataMandir}
                  onChange={handleChange}
                >
                  {devataMandirs.map((mandir) => (
                    <MenuItem
                      key={mandir.id}
                      value={mandir.id}
                    >
                      {mandir.mandirName}
                    </MenuItem>
                  ))}
                  <Divider />

                  <MenuItem key='addTemple'>
                    <Button
                      variant='text'
                      onClick={addFamilyDevataMandir}
                      className='text-current'
                    >
                      Add New Family Devata Mandir
                    </Button>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Member Reference */}
            <Grid size={6}>
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
                      value={member.id}
                    >
                      {member.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={12} className='flex justify-end'>
              <Button
                loading={loading}
                type='submit'
                size='medium'
                variant='contained'
                disabled={loading}
                className='text-white inline bg-brand-500'
              >
                Register Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
