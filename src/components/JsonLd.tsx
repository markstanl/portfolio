import React from "react";

/**
 * Emits a schema.org graph as an inline JSON-LD script.
 *
 * `<` is escaped because the payload will eventually carry Sanity-authored
 * strings, and a literal `</script>` inside one would otherwise close the tag.
 */
const JsonLd = ({ data }: { data: object }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default JsonLd;
