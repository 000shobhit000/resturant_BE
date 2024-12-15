import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Category } from "../entities/Category";
import { Item } from "../entities/Item";
import dotenv from "dotenv";

dotenv.config();

// const config = {
//   user: "avnadmin",
//   password: "AVNS_moRqAqHtK_JyhcO4VRU",
//   host: "postgresql-one-shobhit-project-one.e.aivencloud.com",
//   port: 15808,
//   database: "defaultdb",
//   ssl: {
//     rejectUnauthorized: true,
//     ca: `-----BEGIN CERTIFICATE-----
// MIIEQTCCAqmgAwIBAgIUE8S1RYXaeWrsdsCX19byQEm+CkQwDQYJKoZIhvcNAQEM
// BQAwOjE4MDYGA1UEAwwvZjk0NWIxMWUtMDUyOC00NTY0LTljMGItMzI5MTEwMGVi
// ZjhhIFByb2plY3QgQ0EwHhcNMjQxMjE1MTYyNDI0WhcNMzQxMjEzMTYyNDI0WjA6
// MTgwNgYDVQQDDC9mOTQ1YjExZS0wNTI4LTQ1NjQtOWMwYi0zMjkxMTAwZWJmOGEg
// UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALEloow+
// 0MW+jZNqoSQ6GuwcO8c3L6zuJg/bw7j48Nb84z7q56UwfD3dLWuHmpvmSW9JMoxq
// v5uohlslQ7PTLp/rq8uf+0WG5hu8RU1aiM5DTlpjiViZi7XGqxZyj/V78Dlmbt5q
// zLcjZS290OGcgvDGj8woHZWGAAI9uHS9wrLJcla6HLfMoRZwJ4ild+BEzycZdHJb
// 5uXysU+/Mn97t/7fYKw80qEVRUoNINOM4dss25bcBmtVEKSJrabpXyVZMU9uh420
// 2TVeKDT+qMZ9eIJq6qSl8wmfIXmlEbvKOQ51MEqnVaJAGM3oALCIYH9O55MxqfAS
// 5a+zaUDl5y+nwXrrgMd+S4/7IbmFNmGsBthS6dlyx5QOZmWtwXLkUpJbl/lC5Ee9
// H2AgcPC3J/r9Jj3H7ZHAhQpGYjiwS4lbinS1N9e3ueNeFMR+D3iQSqjvOh/3T6e5
// cDvFkTuz0J9hcXDhFS3/mGPdDndjOzw7KmUTVceVApG7DnAyqBpolC7jNwIDAQAB
// oz8wPTAdBgNVHQ4EFgQU4NYakiw068b8tfE9RRfIawWVVfgwDwYDVR0TBAgwBgEB
// /wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBAEaJ9uCspvGQqFsW
// qvRytiK3CkbAL9l9VYL92BfC5g4FnvhDE9MDaao9omdQbBkDfonkp+Ze0acmbyxH
// +GP+e9JSmSH2GH8ERMYkgyvmor4GU0OcWn149fUQPJB0FkHgF3eKQn0QU21fxrby
// xNcVmwsZAmsfWAOz9COel5DBKUtO4OGOjCVn4wifjF+pYt/DUIHBl6SepxikWkSo
// cHZwuXDPeUrBkMyqqq8B1aHi0MMCKmAdkT0y1VRNk1eK+oN6S5V9piqIm6zRdT+Z
// PGAZ/H3n1Mjwnbz6OzxH4WW+Ue5j8vpZie6iLVEwBoZ3GdfQ12a6MYbrLTPskYD+
// 2l+NdRDNlyz0yXYAilIyBEJ8ZEQDLzuV3LmQUkpFF8wkip2PTkfVLLuk4UmE1eDb
// iIGjuUTiVaEbhxM/WJV+FBU07rU7twl2TK00n+CB7zlT2/N9V17zcLBe1ED/5jts
// tKmBRlXa8igi/VmmHWZqdRV6YwsGzwGgO1o1+RqZx/rk5+JtlA==
// -----END CERTIFICATE-----`,
//   },
// };

export const AppDataSource = new DataSource({
  type: "postgres",
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 15808,
  database: "defaultdb",
  entities: [User, Category, Item],
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
    ca: process.env.POSTGRES_CA,
  },
});

console.log("PostgreSql database successfully connected.");
