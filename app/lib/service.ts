import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            author {
               node {
                  name
               }
            }
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            slug
            title
            content
            uri
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
        post(id: $id, idType: SLUG) {
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
        }
      }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}

export async function getPageBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPageBySlug {
      pageBy(id: "", uri: "", pageId: 10) {
        content(format: RENDERED)
        slug
        title(format: RENDERED)
        template {
          templateName
        }
      }
    }`,
    {
      variables: {
        slug,
      },
    }
  );

  return data?.pageBy;
}

export async function getPages() {
  const data = await fetchAPI(
    `query GetPages {
      pages {
        nodes {
          id
          slug
          title(format: RENDERED)
          uri
          template {
            templateName
          }
          pageId
          content(format: RENDERED)
        }
      }
    }`
  );

  return data?.pages.nodes;
}

export async function getMenu() {
  const data = await fetchAPI(
    `query GetMenu {
         menu(id: "") {
            menuItems {
              nodes {
                url
                title
                path
                target
              }
            }
          }
      }`
  );
}
