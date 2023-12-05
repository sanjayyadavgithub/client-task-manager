import axios from "axios";
const API = axios.create({
  baseURL: "https://task-manager-p597.onrender.com/api/"
});
export const AdminRegister = async (data) =>{
  return await API.post("/auth/admin/register", data);
}

export const AdminLogin = async (data) =>{
  return await API.post("/auth/admin/login", data);
}

export const EmployeeLogin = async (data) =>{
  return await API.post("/auth/employee/login", data);
}

export const generateOtp = async (email, name, reason) =>{
  return await API.get(`/auth/admin/generateotp?email=${email}&name=${name}&reason=${reason}`);
}

export const verifyOtp = async (otp) =>{
  return await API.get(`/auth/admin/verifyotp?code=${otp}`);
}

export const resetPassword = async (email, password) =>{
  return await API.put("/auth/admin/forgetpassword", { email, password });
}

export const findUserByEmail = async (email) =>{
  return await API.get(`/auth/admin/findbyemail?email=${email}`);
}

export const updatePassword = async (data, token) =>{
  return await API.put("/auth/updatepassword", data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const updateProfile = async (data, token) =>{
  return await API.put("/auth/updateprofile", data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}
// Admin Routes

export const employeeRegister = async (data, token) =>{
  return await API.post(
    "/admin/employeeregister",
    data,
    { headers: { Authorization: `Bearer ${token}` } },
    { withCredentials: true }
  );
}

export const getAllEmployees = async (token) =>{
  return await API.get("/admin/getAllEmployees", {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const getEmployee = async (employeeId, token) =>{
  return await API.get(`/admin/getEmployee/${employeeId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

// Employee Routes
export const createNewTask = async (data, token) =>{
  return await API.post("/employee/createtask", data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const updateTask = async (data, token) =>{
  return await API.put("/employee/updatetask", data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const deleteTask = async (id, token) =>{
  return await API.delete(`/employee/deletetask?taskId=${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const getAllTasks = async (token) =>{
  return await API.get("/employee/getalltasks", {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const getAllTasksAdmin = async (token) =>{
  return await API.get("/auth/admin/alltask", {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const createNewTaskAdmin = async (data,token) =>{
  return await API.post("/admin/createtaskadmin", data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

export const updateExist = async (data,token) =>{
  return await API.post("/admin/updateexist", data, {
    headers: { Authorization: `Bearer ${token}` }
  });
}