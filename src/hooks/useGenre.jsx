const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const GeneralIds = selectedGenres.map((g) => g.id);
  return GeneralIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;