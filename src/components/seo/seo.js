import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ lang, meta }) => {
  return (
    // Helmet: React Helmet 플러그인
    <Helmet
      htmlAttributes={{
        lang,
      }}
      meta={[
        {        
            name: `google-site-verification`,
            content: `<meta name="google-site-verification" content="aBb0euftDan4QjFE9WStlXiXSBCQDIfQ3c-v71wVPck" />`,
        }
    ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};