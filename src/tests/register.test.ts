import { startServer } from "..";
import {request} from "graphql-request";
import { host } from "./constants";

const email = "rishiwhite@gmail.com";
const password = "darksector";

const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`
test("Register User", async() => {
    const response = await request(host, mutation);
    expect(response).toEqual({register: true});
})