import prisma from '../lib/prisma';
import { Prisma, department, employee, position } from '@prisma/client';


export async function findAllEmployee(): Promise<employee[]>{
    return await prisma.employee.findMany({
        orderBy: {id : "asc" }
    });
}

export async function findAll(){
    return await prisma.$queryRaw` SELECT employee.id AS id, employee.firstname AS firstname, 
    employee.lastname AS lastname ,employee.gender AS gender,
    employee.address AS address, employee.salary AS salary,
    department.depname AS dpname, position.posname AS poname
    FROM employee, position,department
    WHERE employee.dep_id = department.id AND
    employee.pos_id = position.id
    ORDER by employee.id ASC` 
}
export  async function removeEmloyee(id:number){
    return await prisma.employee.delete({
        where : {id: id}
    })
}

export async function createEmployee (data: any) 
{ return await prisma.employee.create({
    data: {
    firstname : data.firstname,
    lastname : data.lastname,
    gender : data.gender,
    address : data.address,
    salary :data.salary,
    startdate : data.startdate,
    dep_id: data.dep_id,
    pos_id : data.pos_id,
    }
    })
    }
// แก้ไขข้อมูลในตาราง employee
export async function updateEmployee(id: number, data: Prisma.employeeUpdateInput) { return await prisma.employee.update({
    where: {id: id},
    data: data
    })
    }
// อ่านข้อมูลทั้งหมดใน table department
export async function findDep(): Promise<department[]> {
    return await prisma.department.findMany({
        orderBy: {id : "asc" }
    })

}

export async function findPos(): Promise<position[]>{
    return await prisma.position.findMany({
        orderBy: {id : "asc" }
    })
}