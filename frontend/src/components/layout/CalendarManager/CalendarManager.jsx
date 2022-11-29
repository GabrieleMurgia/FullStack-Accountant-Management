import React, { useEffect, useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { ClientModal } from "../../../ClientModal/ClientModal";
import { Table } from "antd";
import { useMutation, useQuery, gql } from "@apollo/client";
import { GET_EXPIRATION_DATES } from "../../../queries/queries";
import { strapiAdapter } from "./../../../utility/strapiAdapter";
import { columns } from "./CalendarManagerConfig";
require("moment/locale/it.js");

export const CalendarManager = (props) => {
  const [adaptedData, setAdaptedData] = useState([]);
  const { data, loading, error } = useQuery(
    GET_EXPIRATION_DATES,
    {
      onCompleted: (data) => {
        setAdaptedData(strapiAdapter(data?.expirationDates));
      },
    },
    {
      onError: (data) => {
        setAdaptedData([]);
      },
    }
  );
  const [showModal, setShowModal] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const arrForTable = [];

    adaptedData.forEach((el) => {
      arrForTable.push({
        costumer: el.costumer.businessName,
        amount: el.amount,
        commission: el.commission,
        payment: el.payment.method,
        status: el.status.sigle,
        reminder: el.reminder,
        date: el.data,
      });

      setDataSource(arrForTable);
    });
  }, [adaptedData]);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={() => handleShowModal()}>Aggiungi al Calendario</button>
      <Table dataSource={dataSource} columns={columns}></Table>
      {showModal && (
        <ClientModal
          handleShowModal={handleShowModal}
          type="calendar"
        ></ClientModal>
      )}
    </div>
  );
};
