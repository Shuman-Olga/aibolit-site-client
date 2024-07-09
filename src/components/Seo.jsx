import { Helmet } from "react-helmet";

export default function SeoPage(props) {
  return (
    <Helmet>
      <title>{props.data.title}</title>
      <meta name="description" content={props.data.description} />
      <meta name="keywords" content={props.data.keywords} />
      <link rel="canonical" href={props.data.urlname} />
      <meta property="og:type" content="article" />
      <meta
        property="og:image"
        content="https://aibolit.tom.ru/assets/8b947efb21c1e40192ec.png"
      ></meta>
      <meta property="og:site_name" content="Айболит" />
      <meta property="og:title" content={props.data.title} />
      <meta property="og:description" content={props.data.description} />
      <meta property="og:url" content={props.data.urlname} />
    </Helmet>
  );
}
