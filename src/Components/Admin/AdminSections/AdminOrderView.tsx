import { yupResolver } from "@hookform/resolvers/yup";
import { Delete, Edit } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, IconButton, Paper, Switch, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Route } from "react-router-dom";
import { OrderModel } from "../../../types/Order";
import { BASE_URL } from "../../../Utils/axios";


type AdminOrdersViewProps = {
    children?: ReactNode
}


const AdminOrdersView: FC<AdminOrdersViewProps> = ({children}) =>{
  const [orders, setOrders] = useState<OrderModel[]>([]);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [expended, setExpended] = useState("");
  const {register, reset, getValues} = useForm({ defaultValues: {
    price: 0
  }})

  const fetchOrders = async () => {
    const {data} = await axios.get(BASE_URL + 'orders');
    setOrders(data);
  }

  useEffect(() => {
    fetchOrders()
  },[])

  const handleEdit = (order: OrderModel) => {
    setSelectedOrderId(order._id);
    reset({price: order.price});
  }

  const deleteOrder = async (id: string) => {
    const {data} = await axios.delete(BASE_URL + 'orders/' + id);
    fetchOrders()
  }

  const handleExpansion = (id: string) => {
    setExpended(prev => {
      if(prev === "" || prev !== id) return id;
      return "";
    })
  }

  const onConfirm = async () => {
    const fields = getValues();
    const {data} = await axios.put(BASE_URL + 'orders', {id: selectedOrderId, ...fields});
    setSelectedOrderId(null);
    fetchOrders()
  }

    return (
      <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="center" spacing={3}>
            <Grid item xs={2}><Typography variant="body1" className="bold">Order id</Typography></Grid>
            <Grid item xs={2}><Typography variant="body1" className="bold">Price</Typography></Grid>
            <Grid item xs={2}><Typography variant="body1" className="bold">User</Typography></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          {orders.map(order => (
          <Accordion expanded={expended === order._id}>
            <AccordionSummary>
              <Grid container>

          <Grid key={order._id} container alignItems="center" justifyContent="center" spacing={3}>
            { selectedOrderId !== order._id ? <>
            <Grid item xs={2}>{order._id}</Grid>
            <Grid item xs={2}>${order.price}</Grid>
            <Grid item xs={2}>{order.user.username}</Grid>
            <Grid item xs={2}><Button onClick={() => handleExpansion(order._id)}>View Order</Button></Grid>
            <Grid item xs={1}><IconButton onClick={() => handleEdit(order)}><Edit/></IconButton></Grid>
            <Grid item xs={1}><IconButton onClick={() => deleteOrder(order._id)}><Delete/></IconButton></Grid>
            </> : 
            <>
            <Grid item xs={2}>{order._id}</Grid>
            <Grid item xs={2}><TextField {...register("price")}/></Grid>
            <Grid item xs={2}>{order.user.username}</Grid>
            <Grid item xs={1}><Button onClick={onConfirm}>Confirm</Button><Button onClick={() => setSelectedOrderId(null)} color="warning">Cancel</Button></Grid>
            <Grid item xs={1}><IconButton onClick={() => deleteOrder(order._id)}><Delete/></IconButton></Grid>
            </>}
          </Grid>
      </Grid>
            </AccordionSummary>
            <AccordionDetails>
                {order.books.map(book => (<Grid container style={{margin: '10px 0'}}>
                  <Grid item xs={12}>
                    {book.book.title}
                  </Grid>
                  <Grid item xs={12}>
                    By {book.book.author}
                  </Grid>
                  <Grid item xs={12}>
                    price: ${book.book.price}
                  </Grid>
                  <Grid item xs={12}>
                    quantity: {book.quantity}
                  </Grid>
                </Grid>
                ))}
            </AccordionDetails>
        </Accordion>
          ))}
      </Container>
    );
}

export default AdminOrdersView;