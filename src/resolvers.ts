import { ResolverMap } from "./types/graphql-utils";
import * as  bcrypt from 'bcryptjs';
import { User } from "./entity/User";
export const resolvers: ResolverMap = {
    Query: {
      hello: (_:any, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`,
    },

    Mutation: {
      register: async (_:any, {email, password}: GQL.IRegisterOnMutationArguments) => {
          const hashpassword = await bcrypt.hash(password, 10);
          await User.create({
              email,
              password: hashpassword
          })
          return true;
      }
    }
  }
  