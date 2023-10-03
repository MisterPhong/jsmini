import prisma from "@/lib/prisma";
import { employee } from "@prisma/client";

export async function findAllEmployee(): Promise<employee[]> {
    return await prisma.employee.findMany({
        orderBy: {id: "asc"}
    })
}

export async function findAll() {
    return await prisma.$queryRaw`SELECT employee.id AS id, employee.firstname AS firstname,
    employee.lastname AS lastname, employee.gender AS gender,
    employee.address AS address, employee.salary AS salary,
    department.depname AS depname, position.posname AS posname
    FROM employee, position, department
    WHERE employee.dep_id = department.id AND
    employee.pos_id = position.id
    ORDER by employee.id ASC`
}

export async function removeEmployee(id: number) {
    return await prisma.employee.delete({
        where : {id: id}
    })
}