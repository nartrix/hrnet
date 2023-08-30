import { Table } from "d-danielo-data-table-oc/dist/lib";

function EmployeeList() {
  const dataEmployees = JSON.parse(localStorage.getItem("EmployeesList")) || [];
  return (
    <>
      <div>hello</div>
      <Table data={dataEmployees} />
    </>
  );
}

export default EmployeeList;
