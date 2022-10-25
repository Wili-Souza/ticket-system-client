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

export const createOrder = (client: Client): Promise<any> => {
  const [resolve, reject, promise] = createPromise();

  const data = {
    method: "post",
    path: "order",
    data: {
      name: "José da Silva",
      cpf: "34534508345",
      quantity: 0,
      eventId: "test",
    },
  };

  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const getAllOrders = (client: Client): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "getAll",
    path: "order",
    data: {},
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const getOrder = (client: Client, id: string): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "get",
    path: "order",
    data: {
      id: id,
    },
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const updateOrder = (client: Client, id: string): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "update",
    path: "order",
    data: {
      id: id,
      name: "Jose da silva",
      cpf: "34534508345",
      quantity: 0,
      eventId: "test",
    },
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};

export const deleteOrder = (client: Client, id: string): Promise<any> => {
  const [resolve, reject, promise] = createPromise();
  const data = {
    method: "delete",
    path: "order",
    data: {
      id: id,
    },
  };
  makeTicketServiceRequest(client, data)
    .then((result) => resolve(result.data))
    .catch((error) => reject(error));

  return promise;
};
