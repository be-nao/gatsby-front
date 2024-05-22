import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-front`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "POKEMON", // GraphQLスキーマ内で使用されるタイプの名前。
        fieldName: "pokemon", // GatsbyのGraphQLクエリ内で使用するフィールドの名前
        url: "https://graphql-pokemon2.vercel.app/", // GraphQLエンドポイントのURL
      },
    },
  ],
};

export default config;