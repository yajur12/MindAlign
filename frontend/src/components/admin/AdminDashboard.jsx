// frontend/src/components/admin/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import { 
    Box, 
    Typography, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';
import { 
    PeopleAlt as UsersIcon, 
    Psychology as TherapistsIcon, 
    AdminPanelSettings as AdminIcon 
} from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [therapists, setTherapists] = useState([]);
    const [openUserModal, setOpenUserModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        // Mock data - replace with actual API calls
        const mockUsers = [
            { id: 1, name: 'John Doe', email: 'john@example.com', role: 'client' },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'therapist' },
            { id: 3, name: 'Admin User', email: 'admin@MindAlign.com', role: 'admin' }
        ];

        const mockTherapists = [
            { id: 1, name: 'Dr. Emily Chen', specialization: 'Anxiety', sessions: 45 },
            { id: 2, name: 'Dr. Michael Rodriguez', specialization: 'Depression', sessions: 38 }
        ];

        setUsers(mockUsers);
        setTherapists(mockTherapists);
    }, []);

    const handleUserDetails = (user) => {
        setSelectedUser(user);
        setOpenUserModal(true);
    };

    const handleCloseUserModal = () => {
        setOpenUserModal(false);
        setSelectedUser(null);
    };

    const dashboardStats = [
        { 
            icon: <UsersIcon sx={{ fontSize: 50, color: 'primary.main' }} />, 
            title: 'Total Users', 
            value: users.length 
        },
        { 
            icon: <TherapistsIcon sx={{ fontSize: 50, color: 'success.main' }} />, 
            title: 'Total Therapists', 
            value: therapists.length 
        },
        { 
            icon: <AdminIcon sx={{ fontSize: 50, color: 'error.main' }} />, 
            title: 'Active Admins', 
            value: users.filter(u => u.role === 'admin').length 
        }
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>

            {/* Dashboard Statistics */}
            <Grid container spacing={3} sx={{ mb: 3 }}>
                {dashboardStats.map((stat, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Paper 
                            elevation={3} 
                            sx={{ 
                                p: 2, 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between' 
                            }}
                        >
                            {stat.icon}
                            <Box>
                                <Typography variant="h6">{stat.title}</Typography>
                                <Typography variant="h4">{stat.value}</Typography>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            {/* User Management Table */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            User Management
                        </Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Role</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>
                                                <Button 
                                                    variant="outlined" 
                                                    size="small"
                                                    onClick={() => handleUserDetails(user)}
                                                >
                                                    Details
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                {/* Therapists List */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            Therapists
                        </Typography>
                        {therapists.map((therapist) => (
                            <Box 
                                key={therapist.id} 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    mb: 1, 
                                    p: 1, 
                                    border: '1px solid', 
                                    borderColor: 'divider', 
                                    borderRadius: 1 
                                }}
                            >
                                <Typography>{therapist.name}</Typography>
                                <Typography variant="body2">
                                    {therapist.sessions} Sessions
                                </Typography>
                            </Box>
                        ))}
                    </Paper>
                </Grid>
            </Grid>

            {/* User Details Modal */}
            <Dialog 
                open={openUserModal} 
                onClose={handleCloseUserModal}
                maxWidth="xs"
                fullWidth
            >
                <DialogTitle>User Details</DialogTitle>
                <DialogContent>
                    {selectedUser && (
                        <>
                            <TextField
                                margin="dense"
                                label="Name"
                                fullWidth
                                variant="outlined"
                                value={selectedUser.name}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                margin="dense"
                                label="Email"
                                fullWidth
                                variant="outlined"
                                value={selectedUser.email}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                margin="dense"
                                label="Role"
                                fullWidth
                                variant="outlined"
                                value={selectedUser.role}
                                InputProps={{ readOnly: true }}
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseUserModal}>Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminDashboard;
