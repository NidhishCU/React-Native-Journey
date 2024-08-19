import React, { useState, useEffect } from 'react';
import { View, Image, FlatList } from 'react-native';

const PokemonGrid = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      const pokemonList = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const pokemonData = await response.json();
          return pokemonData;
        })
      );
      setPokemon(pokemonList);
      setLoading(false);
    };
    fetchPokemon();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: 100, height: 100, margin: 10, padding: 10 }}>
        <Image
          source={{ uri: item.sprites.other.dream_world.front_default }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={pokemon}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        // Load more Pokémon when the user reaches the end of the list
        console.log('Load more Pokémon');
      }}
    />
  );
};

export default PokemonGrid;