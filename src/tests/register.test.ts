import {request} from "graphql-request";
import { host } from "./constants";
import { User } from "../entity/User";
import { startServer } from "../startServer";

const email = "xxx@gmail.com";
const password = "darksector";
let getHost = () => "";
const mutation = `
    mutation {
        register(email: "${email}", password: "${password}")
    }
`
beforeAll(async () => {
    const app:any = await startServer();
    const {port} = app.address();
    getHost = () => `http://127.0.0.1:${port}`
})
test("Register User", async() => {
    
    const response = await request(host, mutation);
    expect(response).toEqual({register: true});
    const users = await User.find({where: {email}});
    expect(users).toHaveLength(1);
    const user = users[0];
    expect(user.email).toEqual(email);
    expect(user.password).not.toEqual(password);
})