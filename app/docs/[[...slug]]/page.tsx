import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: string[]; //array
  };
}) => {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  } else return <div>Docs Page</div>;
};

export default Docs;
