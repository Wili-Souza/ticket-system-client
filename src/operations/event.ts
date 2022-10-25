import Client from "../../middleware/src/client";
import { createPromise } from "../../middleware/src/helpers/promise";

const makeTicketServiceRequest = (
  client: Client,
  data: Object
): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  client
    .request("ticketService", data)
    .then((result) => resolve(result))
    .catch((error) => reject(error));
  return promise;
};

export const createEvent = (client: Client): Promise<any> => {
  const [resolve, reject, promise] = createPromise();

  const data = {
    method: "post",
    path: "event",
    data: {
      name: "Evento legal",
      type: "show",
      local: "barramas",
      ticketPrice: 0,
      ticketQuantity: 0,
      date: "34-23-6543",
    },
  };

  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const getAllEvents = (client: Client): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "getAll",
    path: "event",
    data: {},
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const getEvent = (client: Client, id: string): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "get",
    path: "event",
    data: {
      id: id,
    },
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const updateEvent = (client: Client, id: string): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "update",
    path: "event",
    data: {
      id: id,
      name: "Evento mais ou menos",
      type: "show",
      local: "barramas",
      ticketPrice: 45.6,
      ticketQuantity: 100,
      date: "34-23-6543",
    },
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const deleteEvent = (client: Client, id: string): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "delete",
    path: "event",
    data: {
      id: id,
    },
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};
