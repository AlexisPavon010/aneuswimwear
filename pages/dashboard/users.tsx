import { Box, Flex, Link as ChakraLink, Text, useToast } from "@chakra-ui/react"
import { MenuItem, Select, ThemeProvider } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";
import Head from "next/head";
import useSWR from "swr";

import { IUser } from "../../interfaces/User";
import { updateUser } from "../../client";
import { lightTheme } from "../../theme";
import { FullLoadingScreen } from "../../components/FullLoadingScreen";

const UsersPage = () => {
  const { data = [], error } = useSWR('/api/admin/users')
  const router = useRouter()
  const toast = useToast()


  if (error) {
    console.log(error)
    return (
      <Box p='50px 20px' h='50vh'>
        <Text
          fontSize='24px'
          textAlign='center'
        >
          Error al cargar la informacion
        </Text>
      </Box>
    )
  }


  if (!error && data.length <= 0) {
    return <FullLoadingScreen />
  }

  const rows = data.map((user: IUser, i: number) => ({
    id: i + 1,
    _id: user._id,
    name: user.name,
    email: user.email,
    rol: user.role
  }))

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'name', headerName: 'FullName', width: 250 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'rol', headerName: 'Rol', width: 100 },
    {
      align: 'center',
      field: 'actions',
      width: 250,
      headerName: 'Actions',
      renderCell: ({ row }: any) => {
        return (
          <>
            <Select
              variant="standard"
              sx={{ border: 'none', minHeight: '100%', }}
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={row.rol}
              label="Age"
              onChange={({ target }) => onRoleUpdated(target.value, row._id)}
            >
              <MenuItem value='client'>Client</MenuItem>
              <MenuItem value='admin'>Admin</MenuItem>
            </Select>
          </>
        )
      }
    },
  ];

  const onRoleUpdated = async (role: string, userId: string) => {
    try {
      const { data } = await updateUser(role, userId)
      toast({
        title: 'Update User',
        description: 'User updated successfully',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      console.log(error)
      toast({
        title: 'Update User Error',
        description: `User role change error`,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Head>
        <title>Aneuswimwear | Users list</title>
      </Head>
      <Flex p={4} align='center'>
        <ChakraLink onClick={() => router.push('/')}>
          <BsArrowLeft size='32px' />
        </ChakraLink>
        <Text
          ml={2}
          fontSize='24px'
          fontWeight={600}
        >
          {`Users (${data.length})`}
        </Text>
      </Flex>
      <Box p='8px 8px 20px 8px'>
        <ThemeProvider theme={lightTheme}>
          <DataGrid
            headerHeight={40}
            rowHeight={56}
            disableSelectionOnClick
            autoHeight
            disableColumnMenu
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[1]}
            experimentalFeatures={{ newEditingApi: true }}
          />
        </ThemeProvider>
      </Box>
    </Box>
  )
}

export default UsersPage;