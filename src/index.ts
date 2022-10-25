import Client from "../middleware/src/client";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "./operations/event";
import { createOrder, deleteOrder, getAllOrders, getOrder, updateOrder } from "./operations/order";

const runEventOperations = async (client: Client): Promise<void> => {
  try {
    const created = await createEvent(client);
    console.log("--- POST: ", created);

    const events = await getAllEvents(client);
    console.log("--- GET ALL: ", events);

    const event = await getEvent(client, created.id);
    console.log("--- GET: ", event);

    const updated = await updateEvent(client, created.id);
    console.log("--- UPDATE: ", updated);

    const deleted = await deleteEvent(client, created.id);
    console.log("--- DELETE: ", deleted);

    const eventsCheck = await getAllEvents(client);
    console.log("--- GET ALL: ", eventsCheck);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const runOrderOperations = async (client: Client): Promise<void> => {
  try {
    const created = await createOrder(client);
    console.log("--- POST: ", created);

    const orders = await getAllOrders(client);
    console.log("--- GET ALL: ", orders);

    const order = await getOrder(client, created.id);
    console.log("--- GET: ", order);

    const updated = await updateOrder(client, created.id);
    console.log("--- UPDATE: ", updated);

    const deleted = await deleteOrder(client, "70d58a64-c799-45f6-af43-c7455e75e3c5");
    console.log("--- DELETE: ", deleted);

    const ordersCheck = await getAllOrders(client);
    console.log("--- GET ALL: ", ordersCheck);
  } catch (error) {
    console.log("Error: ", error);
  }
};

Client.create()
  .then(async (client) => {
    runEventOperations(client);
    runOrderOperations(client);
  })
  .catch((error) => console.log(error));
