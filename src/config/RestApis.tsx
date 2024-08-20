
const server_local_admin = 'http://localhost:9091/api/v1/admin';
const server_local_auth = 'http://localhost:9090/api/v1/auth';
const server_local_company = 'http://localhost:9093/api/v1/company';
const server_local_employee = 'http://localhost:9094/api/v1/employee';
const server_local_necessity = 'http://localhost:9098/api/v1';
const server_local_mail = 'http://localhost:9097/api/v1/mail';
const server_local_manager = 'http://localhost:9092/api/v1/manager';



const apis = {
   admin : server_local_admin,
   auth : server_local_auth,
   company : server_local_company,
   employee : server_local_employee,
   leave : server_local_necessity+'/leave',
   mail : server_local_mail,
   manager : server_local_manager,
   shift : server_local_necessity+'/shift',
   equipment : server_local_necessity+'/equipment',
}

export default apis;