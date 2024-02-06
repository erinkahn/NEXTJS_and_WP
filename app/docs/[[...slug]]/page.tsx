import React from "react";

// you add two [[...slug]] so that the docs page shows up and doesnt show a 404 page. with only [...slug] you will get a 404 page at localhost:3000/docs

// this is called catch-all routing or catch-all dynamic segments

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
