interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: 'Flywith24 Running Page',
  siteUrl: 'https://www.strava.com/athletes/117781024',
  logo: 'https://i.postimg.cc/Fs2kN2HY/2025-07-26-3-13-06.jpg',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://juejin.cn/user/219558054476792/posts',
    },
    {
      name: 'About',
      url: 'https://github.com/Flywith24',
    },
  ],
};

export default data;
