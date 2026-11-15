import { notFound } from "next/navigation";
import { getDetail, getList, isNotFoundError, isValidContentId } from "../../../libs/microcms";
import { Article } from "../../../components/blog/Article/Article";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

const getArticle = async (slug: string) => {
  if (!isValidContentId(slug)) notFound();
  try {
    return await getDetail(slug);
  } catch (e) {
    if (isNotFoundError(e)) notFound();
    throw e;
  }
};

export async function generateMetadata({ params }: Props): Promise<any> {
  const { slug } = await params;
  const data = await getArticle(slug);

  return {
    title: data.title,
    description: data.description,
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

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = await getArticle(slug);

  return <Article data={data} />;
}
