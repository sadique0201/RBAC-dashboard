import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRole, addRole, updateRole } from '../redux/rolesSlice';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, TextField, Dialog, DialogActions, DialogContent, DialogTitle, InputAdornment, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const RoleList = () => {
  const roles = useSelector(state => state.roles);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentRole, setCurrentRole] = useState({ name: '', permissions: [] });
  const [search, setSearch] = useState('');

  const handleDelete = (id) => {
    dispatch(deleteRole(id));
  };

  const handleEdit = (role) => {
    setCurrentRole(role);
    setEditMode(true);
    setOpen(true);
  };

  const handleAdd = () => {
    setCurrentRole({ name: '', permissions: [] });
    setEditMode(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (editMode) {
      dispatch(updateRole(currentRole));
    } else {
      dispatch(addRole({ ...currentRole, id: Date.now() }));
    }
    setOpen(false);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredRoles = roles.filter(role => 
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Typography variant="h2" gutterBottom>Role Management</Typography>
      <TextField 
        label="Search Roles" 
        variant="outlined" 
        fullWidth 
        margin="normal" 
        value={search} 
        onChange={handleSearch} 
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<AddIcon />} 
        onClick={handleAdd}
        style={{ marginBottom: '16px' }}
      >
        Add Role
      </Button>
      <TableContainer component={Paper} style={{ marginTop: '16px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Role Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRoles.map(role => (
              <TableRow key={role.id}>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.permissions.join(', ')}</TableCell>
                <TableCell>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    startIcon={<EditIcon />} 
                    onClick={() => handleEdit(role)}
                    style={{ marginRight: '8px' }}
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="outlined" 
                    color="secondary" 
                    startIcon={<DeleteIcon />} 
                    onClick={() => handleDelete(role.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Role Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentRole.name}
            onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
          />
          <TextField
            label="Permissions (comma separated)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentRole.permissions.join(', ')}
            onChange={(e) => setCurrentRole({ ...currentRole, permissions: e.target.value.split(', ') })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSave} color="primary">{editMode ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleList;
