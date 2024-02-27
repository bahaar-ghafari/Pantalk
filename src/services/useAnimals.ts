// useAnimals.js
import useSWR from 'swr';

const url_animals = 'https://api.petfinder.com/v2/animals'
const fetcher = (url: string | URL) => fetch(url).then(res => res.json());

export const useAnimals = () => {
  const { data, error } = useSWR(url_animals, fetcher);

  return {
    animals: data,
    isLoading: !error && !data,
    isError: error
  };
};
