import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  Grid,
  Paper,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminOrdersView from "./AdminSections/AdminOrderView";
import AdminUsersView from "./AdminSections/AdminUsersView";
import './AdminPage.css';
import BookTableContainer from "../BookTable/BookTableContainer";

type AdminPageProps = {
  children?: ReactNode;
};

const dict = ["users", "orders", "books"];

const AdminPage: FC<AdminPageProps> = ({ children }) => {
  const [tab, setTab] = useState(0);
  const location = useLocation();
  const navigator = useNavigate();

  const handleChangeTab = (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    navigator(`${dict[value]}`)
    setTab(value);
  };

  useEffect(() => {
    const tab = location.pathname.split('/').at(-1);
    switch (tab) {
      case 'users':
        setTab(0)
        break;
      case 'orders':
        setTab(1)
        break;
      default:
        break;
    }
  },[])

  return (
    <Grid container>
      <Container maxWidth="xl">
        <Grid container style={{marginTop: '2vh'}}>
        <Typography variant="h4">Admin Page</Typography>
        </Grid>
      </Container>
    <Grid container>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tab}
        onChange={handleChangeTab}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
        >
        <Tab label="Users" />
        <Tab label="Orders" />
        <Tab label="books" />
      </Tabs>
          </Grid>

      <Routes>
        <Route path={`users`} element={<AdminUsersView />} />
      </Routes>
      <Routes>
        <Route path={`orders`} element={<AdminOrdersView />} />
      </Routes>
      <Routes>
        <Route path="books" element={<BookTableContainer />} />
      </Routes>
    </Grid>
  );
};

export default AdminPage;
