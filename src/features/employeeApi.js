import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Employees"],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => "employees",
      providesTags: ["Employees"],
    }),
    getEmployee: builder.query({
      query: (EmployeeID) => `employee/${EmployeeID}`,
      providesTags: ["Employees"],
    }),
    registerEmployee: builder.mutation({
      query: (newEmployee) => ({
        url: "employee",
        method: "POST",
        body: newEmployee,
      }),
      invalidatesTags: ["Employees"],
    }),
    loginEmployee: builder.mutation({
      query: (employee) => ({
        url: "employees/auth/login",
        method: "POST",
        body: employee,
      }),
      invalidatesTags: ["Employees"],
    }),
    updateEmployee: builder.mutation({
      query: (updatedEmployee) => ({
        url: `/employees/${updatedEmployee.EmployeeID}`,
        method: "PUT",
        body: updatedEmployee,
      }),
      invalidatesTags: ["Employees"],
    }),
    deleteEmployee: builder.mutation({
      query: (EmployeeID) => ({
        url: `employees/${EmployeeID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Employees"],
    }),
  }),
});

export const {
  useRegisterEmployeeMutation,
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useUpdateEmployeeMutation,
  useLoginEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
