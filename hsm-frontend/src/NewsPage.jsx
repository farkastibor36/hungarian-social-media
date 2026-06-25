import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    Stack,
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

function NewsPage({onLogout}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    bgcolor: '#16171d',
                    color: '#f3f4f6',
                }}
            >
                <Box
                    component="aside"
                    sx={{
                        width: 240,
                        minHeight: '100vh',
                        borderRight: '1px solid #2e303a',
                        bgcolor: '#16171d',
                        p: 2,
                    }}
                >
                    <Stack
                        spacing={1.5}
                        alignItems="center"
                        sx={{
                            mb: 3,
                        }}
                    >
                        <Avatar
                            src="/profil_picture_2.jpg"
                            alt="Profilkép"
                            sx={{
                                width: 96,
                                height: 96,
                                border: '2px solid #2e303a',
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                color: '#f3f4f6',
                                fontWeight: 500,
                            }}
                        >
                            Menü
                        </Typography>
                    </Stack>

                    <Stack spacing={1.5}>
                        <Button
                            fullWidth
                            variant="text"
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#f3f4f6',
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#23242c',
                                },
                            }}
                        >
                            Profil
                        </Button>

                        <Button
                            fullWidth
                            variant="text"
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#f3f4f6',
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#23242c',
                                },
                            }}
                        >
                            Üzenetek
                        </Button>

                        <Button
                            fullWidth
                            variant="text"
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#f3f4f6',
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#23242c',
                                },
                            }}
                        >
                            Barátok
                        </Button>

                        <Button
                            fullWidth
                            variant="text"
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#f3f4f6',
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    bgcolor: '#23242c',
                                },
                            }}
                        >
                            Csoportok
                        </Button>

                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={onLogout}
                            sx={{
                                justifyContent: 'flex-start',
                                color: '#ef4444',
                                borderColor: '#ef4444',
                                textTransform: 'none',
                                fontSize: '1rem',
                                mt: 2,
                                '&:hover': {
                                    borderColor: '#ef4444',
                                    bgcolor: 'rgba(239, 68, 68, 0.1)',
                                },
                            }}
                        >
                            Kijelentkezés
                        </Button>
                    </Stack>
                </Box>

                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        p: 4,
                    }}
                >
                    <Typography variant="h3" mb={2}>
                        Hírek
                    </Typography>

                    <Typography sx={{color: '#9ca3af'}}>
                        Itt jelennek majd meg a legfrissebb bejegyzések.
                    </Typography>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default NewsPage