import { Helmet, HelmetProvider } from 'react-helmet-async';

const MetaData = ({ title, description, keywords, image }:any) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title ? title : "Welcome to Agra Metro Rail"}</title>
        <meta name="description"
          content={description ? description : "Agra ghumo, Khao pio aish kro."} />
        <meta name="keywords"
          content={keywords ? keywords : "Agra metro"} />

        <link rel="canonical" href="/" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description ? description : "Immerse yourself in the captivating visual stories with Jatin Mittal Photography. From timeless wedding moments to intimate portrait sessions, we specialize in crafting unforgettable memories expertly captured by our talented photographers. Explore our portfolio and book your session today to preserve your special moments forever."} data-react-helmet={true} />
        <meta property="og:image" content={image} />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Helmet>
    </HelmetProvider>
  );
};

export default MetaData;
