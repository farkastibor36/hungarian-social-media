import {useState} from 'react'
import {
    Box,
    Button,
    CssBaseline,
    CircularProgress,
    Paper,
    Stack,
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
    Typography,
    createTheme,
} from '@mui/material'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#16171d',
            paper: '#16171d',
        },
        primary: {
            main: '#c084fc',
        },
        text: {
            primary: '#f3f4f6',
            secondary: '#9ca3af',
        },
    },
})

const textFieldStyles = {
    '& .MuiInputBase-input': {
        color: '#f3f4f6',
    },
    '& .MuiInputLabel-root': {
        color: '#9ca3af',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#c084fc',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#2e303a',
        },
        '&:hover fieldset': {
            borderColor: '#3b3d49',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#c084fc',
        },
    },
}

function App() {
    const [tab, setTab] = useState(0)

    const [loading, setLoading] = useState(false)

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const [registerData, setRegisterData] = useState({
        lastName: '',
        firstName: '',
        birthDate: '',
        password: '',
        confirmPassword: '',
    })

    const handleLoginChange = (e) => {
        const {name, value} = e.target
        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleRegisterChange = (e) => {
        const {name, value} = e.target
        setRegisterData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            console.log('Login data:', loginData)
        } catch (error) {
            console.error('Sikertelen bejelentkezés:', error)
        } finally {
            setLoading(false)
        }
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const handleRegisterSubmit = (e) => {
        e.preventDefault()

        if (registerData.password !== registerData.confirmPassword) {
            alert('A két jelszó nem egyezik!')
            return
        }

        console.log('Register data:', registerData)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    px: 2,
                    bgcolor: '#16171d',
                }}
            >
                <Paper
                    elevation={0}
                    sx={{
                        width: '100%',
                        maxWidth: 520,
                        p: 4,
                        borderRadius: 3,
                        bgcolor: '#16171d',
                        color: '#f3f4f6',
                        border: '1px solid #2e303a',
                    }}
                >
                    <Typography variant="h4" textAlign="center" mb={3} sx={{color: '#f3f4f6', whiteSpace: 'nowrap'}}>
                        🇭🇺 Magyar közösségi oldal
                    </Typography>

                    <Tabs
                        value={tab}
                        onChange={(e, newValue) => setTab(newValue)}
                        centered
                        sx={{
                            mb: 3,
                            '& .MuiTab-root': {
                                color: '#9ca3af',
                                textTransform: 'none',
                            },
                            '& .Mui-selected': {
                                color: '#1a8afa',
                            },
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#1a8afa',
                            },
                        }}
                    >
                        <Tab label="Bejelentkezés"/>
                        <Tab label="Regisztráció"/>
                    </Tabs>

                    {tab === 0 && (
                        <Box component="form" onSubmit={handleLoginSubmit}>
                            <Stack spacing={2}>
                                <TextField
                                    label="Email cím"
                                    name="email"
                                    value={loginData.email}
                                    onChange={handleLoginChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <TextField
                                    label="Jelszó"
                                    name="password"
                                    type="password"
                                    value={loginData.password}
                                    onChange={handleLoginChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    disabled={loading}
                                    sx={{
                                        mt: 1,
                                        bgcolor: '#1a8afa',
                                        color: '#16171d',
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: '#1a8afa',
                                        },
                                        '&.Mui-disabled': {
                                            bgcolor: '#1a8afa',
                                            color: '#16171d',
                                            opacity: 0.8,
                                        },
                                    }}
                                >
                                    {loading ? (
                                        <circularProgress size={24} sx={{color: '#16171d',}}
                                        />
                                    ) : (
                                        'Belépés'
                                    )}
                                </Button>
                            </Stack>
                        </Box>
                    )}

                    {tab === 1 && (
                        <Box component="form" onSubmit={handleRegisterSubmit}>
                            <Stack spacing={2}>
                                <TextField
                                    label="Vezetéknév"
                                    name="lastName"
                                    value={registerData.lastName}
                                    onChange={handleLoginChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <TextField
                                    label="Keresztnév"
                                    name="firstName"
                                    value={registerData.firstName}
                                    onChange={handleLoginChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <Stack spacing={1}>
                                    <Typography
                                        sx={{color: '#9ca3af', fontSize: '0.95rem', pl: 1.5,}}>
                                        Születési dátum
                                    </Typography>
                                    <TextField
                                        name="birthDate"
                                        type="date"
                                        value={registerData.birthDate}
                                        onChange={handleRegisterChange}
                                        fullWidth
                                        sx={textFieldStyles}
                                    />
                                </Stack>
                                <TextField
                                    label="Email cím"
                                    name="username"
                                    value={registerData.email}
                                    onChange={handleRegisterChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <TextField
                                    label="Jelszó"
                                    name="password"
                                    type="password"
                                    value={registerData.password}
                                    onChange={handleRegisterChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <TextField
                                    label="Jelszó újra"
                                    name="confirmPassword"
                                    type="password"
                                    value={registerData.confirmPassword}
                                    onChange={handleRegisterChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        mt: 1,
                                        bgcolor: '#1a8afa',
                                        color: '#16171d',
                                        textTransform: 'none',
                                        '&:hover': {
                                            bgcolor: '#1a8afa',
                                        },
                                    }}
                                >
                                    Regisztráció
                                </Button>
                            </Stack>
                        </Box>
                    )}
                </Paper>
            </Box>
        </ThemeProvider>
    )
}

export default App