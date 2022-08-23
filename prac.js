createAllNecessaryTables: async () => {
    let queryPromises = []
    for (let item of necessaryTables) {
        queryPromises.push(sequelize.query(item));
    }
    const resolved = await Promise.allSettled(queryPromises)
    console.log(resolved);
    return "success";
}

const necessaryTables = [
    `alter table employees
        rename column id to Employee_Id,
        add Employee_Name varchar(255) after Employee_Id,
        add Contact_no double after Employee_Name,
        add DOB Date after Contact_no,
        add Email varchar(255) after DOB`,

    `alter table hrs
        rename column id to HR_Id,
        add HR_Name varchar(255) after HR_Id,
        add Login_Id varchar(255) after HR_Name,
        add Login_Password varchar(255) after Login_Id`,

    `alter table admins
        rename column id to Admin_Id,
        add Admin_Name varchar(255) after Admin_Id,
        add Login_Id varchar(255) after Admin_Name,
        add Login_Password varchar(255) after Login_Id`,

    `alter table users
        rename column id to User_Id,
        add Applicant_Name varchar(255) after User_Id,
        add Father_Name varchar(255) after Applicant_Name,
        add Mother_Name varchar(255) after Father_Name,
        add DOB Date after Mother_Name,
        add Email varchar(255) after DOB,
        add Contact_No double after Email,
        add Address text after Contact_No,
        add Graduation varchar(255) after Address,
        add Post_Graduation varchar(255) after Graduation,
        add Apply_As_Title varchar(255) after Post_Graduation,
        add Past_Job_Title varchar(255) after Apply_As_Title,
        add Past_Job_Designation varchar(255) after Past_Job_Title,
        add Past_Job_Organization varchar(255) after Past_Job_Designation,
        add Past_Organization_Joining_Date Date after Past_Job_Organization,
        add Past_Organization_Leaving_Date Date after Past_Organization_Joining_Date,
        add Past_Organization_Leaving_Reason text after Past_Organization_Leaving_Date,
        add Reference varchar(255) after Past_Organization_Leaving_Reason,
        add Approved_by_HR Boolean after Reference,
        add Approved_by_Admin Boolean after Approved_by_HR`,

    `create table salary(
        Salary_Id int not null primary key auto_increment,
        Employee_Initial_Salary float,
        Employee_Current_Salary float,
        Employee_Id int not null,
        foreign key(Employee_Id) references employees(Employee_Id))`,

    `create table employee_address(
        Address_Id int not null primary key auto_increment,
        Employee_Id int not null,
        Address_Type varchar(255),
        House_No varchar(255),
        Street_Name text,
        City varchar(255),
        State varchar(255),
        Zip_Code int,
        foreign key(Employee_Id)references employees(Employee_Id))`,

    `create table daily_attendance(
        Attendance_Id int not null primary key auto_increment,
        Employee_Id int not null,
        Date Date,
        Status varchar(255),
        foreign key(Employee_Id)references employees(Employee_Id))`,

    `create table reasons(
        Reason_Id int not null primary key auto_increment,
        Attendance_Id int not null,
        Absent_Reason text,
        Late_Reason text,
        HalfDay_Reason text,
        foreign key(Attendance_Id) references daily_attendance(Attendance_Id))`,

    `create table login(
        id int not null primary key auto_increment,
        Employee_Id int not null,
        Login_Id varchar(255),
        Login_Password varchar(255),
        foreign key(Employee_Id) references employees(Employee_Id))`,

    `create table employee_experience(
        Experience_Id int not null primary key auto_increment,
        Employee_Id int not null,
        Job_Title varchar(255),
        Designation varchar(255),
        Organization text,
        Joining_Date Date,
        Leaving_Date Date,
        Reason_to_left text,
        foreign key(Employee_Id) references employees(Employee_Id))`,

    `create table leaves(
        Employee_Id int not null,
        Total_Paid_Leaves int,
        Used_Paid_Leaves int,
        Remaining_Paid_Leaves int,
        foreign key(Employee_Id) references employees(Employee_Id))`,

    `create table departments(
        Department_Id int not null primary key auto_increment,
        Department_Title varchar(255))`,

    `create table employee_of_department(
        Employee_Id int not null,
        foreign key(Employee_Id) references employees(Employee_Id),
        Department_Id int not null,
        foreign key(Department_Id) references departments(Department_Id))`,

    `create table roles(
        Role_Id int not null primary key auto_increment,
        aRole_Title varchar(255),
        Department_Id int not null,
        foreign key(Department_Id) references departments(Department_Id))`,

    `create table employee_has_roles(
        Employee_Id int not null,
        Role_Id int not null,
        foreign key(Employee_Id) references employees(Employee_Id),
        foreign key(Role_Id) references roles(Role_Id))`,

    `create table permissions(
        Permission_Id int not null primary key auto_increment,
        Permission_Title varchar(255),
        Permission_Description text)`,

    `create table role_has_permissions(
        Role_Id int not null,
        Permission_Id int not null,
        foreign key(Role_Id) references roles(Role_Id),
        foreign key(Permission_Id) references permissions(Permission_Id))`,

    `create table increments(
        Id int not null primary key auto_increment,
        Employee_Id int not null,
        1st_Increment float,
        1st_Increment_Date Date,
        2st_Increment float,
        2st_Increment_Date Date,
        foreign key(Employee_Id) references employees(Employee_Id))`,

    `create table employee_skills(
        Skill_Id int not null primary key auto_increment,
        Skill_Scope varchar(255),
        Skill_Title varchar(255),
        Description text)`,

    `create table employee_has_skills(
        Skill_Id int not null,
        Employee_Id int not null,
        foreign key(Skill_Id) references employee_skills(Skill_Id),
        foreign key(Employee_Id) references employees(Employee_Id))`,

    `create table tasks(
        Task_Id int not null primary key auto_increment,
        Task_Name varchar(255),
        Task_Description text)`,

    `create table employee_has_tasks(
        Task_Id int not null,
        Employee_Id int not null,
        foreign key(Employee_Id) references employees(Employee_Id),
        foreign key(Task_Id) references tasks(Task_Id))`
]