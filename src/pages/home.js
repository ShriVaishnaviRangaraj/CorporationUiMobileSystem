import React, { useState, useEffect } from "react";
import fireDb from "../firebase-app";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import axios from "axios";

const MyNewTitle = ({ text = "TODAY'S COMPLAINTS", variant = "h2" }) => (
  <Typography
    variant={variant}
    style={{
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      fontFamily: "monospace",
    }}
  >
    {text}
  </Typography>
);

const Home = () => {
  var id = 1;
  var arr = [];
  const [tableData, setTableData] = useState([{}]);
  const columns = [
    {
      title: "S.NO.",
      field: "id",
      align: "center",
      sorting: false,
      width: "10%",
    },
    {
      title: "ADDRESS",
      field: "address",
      align: "center",
      width: "70%",
      headerStyle: {
        backgroundColor: "#039be5",
      },
    },
  ];

  useEffect(() => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    today = dd + "-" + mm + "-" + yyyy;
    fireDb.child("complaints").on("value", (snapshot) => {
      snapshot.forEach((objects) => {
        var address = objects.key;
        var obj = {};
        var date = objects.val().date;
        if (date == today) {
          obj["id"] = id;
          id = id + 1;
          obj["address"] = address;
          console.log(address);
          arr.push(obj);
        }
      });
      setTableData(arr);
      console.log(arr);
    });

    return () => {
      setTableData([]);
    };
  }, []);

  return (
    <>
      <h1 style={{ fontFamily: "initial" }}>TODAY'S COMPLAINTS</h1>
      <br />
      <MaterialTable
        columns={columns}
        data={tableData}
        editable={{
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              //const updatedData = [...tableData];
              var ph = [];
              var addr = selectedRow.address;
              fireDb
                .child("complaints")
                .child(addr)
                .child("users")
                .once("value", (snapshot) => {
                  snapshot.forEach((objects) => {
                    let phone = objects.val();
                    //console.log(phone);
                    ph.push(phone);
                  });
                });

              fireDb.child("complaints").child(addr).remove();
              window.location.reload(false);
              axios
                .get(
                  "https://www.fast2sms.com/dev/bulkV2?authorization=ciFSKe6ERGxWAJgCU7P3wvm9XaNkOhl2Vonq4T8YsQBuZpyr1z0fxYzQ8CKU7WdHeB1qa6rjJiIcsP5Z&sender_id=Cghpet&message=Your Area has been cleaned.Thankyou :)&route=v3&numbers=" +
                    ph.toString()
                )
                .then((res) => {
                  console.log(res);
                });
              console.log(selectedRow.address);
              //updatedData.splice(selectedRow.tableData.id, 1);
              //setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        localization={{
          header: {
            actions: "UPDATE STATUS",
          },
        }}
        options={{
          tableLayout: "auto",
          searchAutoFocus: true,
          searchFieldAlignment: "right",
          pageSizeOptions: [10, 20, 30, 40, 50],
          pageSize: 10,
          paginationPosition: "both",
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          exportButton: true,
          exportAllData: true,
          exportFileName: "Today's Complaints",
          actionsColumnIndex: -1,
          actionsCellStyle: { justifyContent: "center" },
          headerStyle: {
            backgroundColor: "#01579b",
            color: "white",
            fontSize: 20,
          },
        }}
        title={<MyNewTitle variant="h4" text="COMPLAINTS" />}
        icons={{
          Delete: () => <button className="btn btn-success">Cleaned</button>,
        }}
      />
    </>
  );
};

export default Home;
