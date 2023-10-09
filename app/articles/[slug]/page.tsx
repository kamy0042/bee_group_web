import { getDetail, getList } from "../../../libs/microcms";
import { Article } from "../../../components/blog/Article/Article";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk: string;
  };
};

export const revalidate = 60;

// ToDo 後でnoindexを消す
export async function generateMetadata({ params, searchParams }: Props): Promise<any> {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return {
    title: data.title,
    description: data.description,
    robots:'noindex',
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data?.thumbnail?.url || ''],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getList();
  return posts.contents.map(item => ({slug:item.id}))
}

export default async function Page({ params, searchParams }: Props) {
  const data = await getDetail(params.slug, {
    draftKey: searchParams.dk,
  });

  return <Article data={data} />;
}