export interface IEmployeeList {
    managerToken: string;
    id: string;
    name: string;
    surname: string;
    managerId?: string;
    companyId?: string;
    identityNumber: string;
    birthDate?: string;
    email: string;
    phoneNumber: string;
    address: string;
    jobStartDate: string;
    jobEndDate?: string;
    position: string;
    salary?: number;
    department: string;
    occupation: string;
    gender?: string;
    militaryService?: boolean;
    driverLicense?: string;
    avatar: string;
    shiftId: string;
}