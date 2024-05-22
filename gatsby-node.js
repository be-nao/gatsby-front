exports.createPages = async function({ actions, graphql }) {
    const { createPage } = actions;
    
    const result = await graphql(`
      query {
        pokemon {
          pokemons(first: 3) {
            name
          }
        }
      }
    `);
  
    if (result.errors) {
      console.error('GraphQL Query Error:', result.errors);
      throw new Error('Failed to load the "pokemons" query');
    }
  
    // クエリの結果が想定通りの配列を返していることを確認
    if (result.data.pokemon && result.data.pokemon.pokemons) {
      result.data.pokemon.pokemons.forEach((pokemon) => {
        createPage({
          path: `/pokemon/${pokemon.name.toLowerCase()}`,
          component: require.resolve("./src/components/PokemonPage.tsx"),
          context: {
            name: pokemon.name,
          },
        });
      });
    } else {
      console.error('No pokemons found in query data:', result.data);
      throw new Error('No pokemons found');
    }
  };
  