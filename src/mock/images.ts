const mockUrls = [
  "https://utfs.io/f/a6212460-11fb-4d89-8f7c-515c3c07988e-ohjax4.webp",
  "https://utfs.io/f/bb0164b4-60ba-4d08-86b3-ea0823378d53-ohjax5.webp",
  "https://utfs.io/f/a9ca47fa-1faf-43af-8935-4d0d8766e457-ohjax7.webp",
  "https://utfs.io/f/411cd6a4-c27f-407e-847c-247694584425-ohjax6.webp",
  "https://utfs.io/f/a6212460-11fb-4d89-8f7c-515c3c07988e-ohjax4.webp",
  "https://utfs.io/f/bb0164b4-60ba-4d08-86b3-ea0823378d53-ohjax5.webp",
  "https://utfs.io/f/a9ca47fa-1faf-43af-8935-4d0d8766e457-ohjax7.webp",
  "https://utfs.io/f/411cd6a4-c27f-407e-847c-247694584425-ohjax6.webp",
  "https://utfs.io/f/a6212460-11fb-4d89-8f7c-515c3c07988e-ohjax4.webp",
  "https://utfs.io/f/bb0164b4-60ba-4d08-86b3-ea0823378d53-ohjax5.webp",
  "https://utfs.io/f/a9ca47fa-1faf-43af-8935-4d0d8766e457-ohjax7.webp",
  "https://utfs.io/f/411cd6a4-c27f-407e-847c-247694584425-ohjax6.webp",
];

export const mockImages = mockUrls.map((url) => ({
  id: crypto.randomUUID(),
  url,
}));
