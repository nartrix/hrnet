import { Table } from "d-danielo-data-table-oc/dist/";

function employeeList() {
  const dataEmployees = JSON.parse(localStorage.getItem("EmployeesList")) || [];
  return (
    <>
      <Table data={dataEmployees} />
    </>
  );
}

export default employeeList;
