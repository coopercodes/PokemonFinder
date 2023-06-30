import { PokemonGrid } from '@/components/pokemon-grid'
import { PokemonCard } from '@/components/pokemon-card'
import Image from 'next/image'
import { getPokemonList } from '@/lib/pokemonAPI'

export default async function Home() {
  // Load in data.
  const pokemonList = await getPokemonList();
  // We can pass data to a client component.

  // Text input: filter the pokemon cards under it:
  // Text input -> "use client" we need access to useState to handle the input
  // When text is inputted -> filter through our current pokemon data.
  // ("use client") PokemonGrid -> (Text input, showing all the cards that are the result of the search)
  
  // We are going to get data for the 151 pokemon from a server component.

  // Pass the data to PokemonGrid

  // 1. Create PokemonGrid (And more components)
  // 2. Load in data from Pokemon API (151 Pokemon)
  // 3. Pass in data to PokemonGrid, show all the pokemon from API call.

  return (
      <PokemonGrid pokemonList={pokemonList}/>
  )
}
