export type SpotifyBandImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyBandResponse = {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: SpotifyBandImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type SpotifySearchResponse = {
  data: {
    artists: {
      href: string;
      items: never[] | SpotifyBandResponse[];
      limit: number;
      next: string | null;
      offset: number;
      previous: string | null;
      total: number;
    };
  };
};
