import { appsignal } from "src/appsignalServer";
import { createApolloPlugin } from "@appsignal/apollo-server";
import { ApolloServer } from "apollo-server-micro";
import { makeSchema, queryType } from "@nexus/schema";
import path from "path";

const Query = queryType({
  definition(t) {
    t.string("name", () => "Leigh Halliday"),
      t.string("website", () => "https://www.leighhalliday.com");
  },
});

const schema = makeSchema({
  types: { Query },
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "src", "generated", "nexus.ts"),
  },
});

const server = new ApolloServer({
  schema,
  plugins: [createApolloPlugin(appsignal)],
});

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
