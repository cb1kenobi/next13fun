// import { useRouter } from 'next/router';

const Post = ({ id, now }: { id: string, now: string }) => {
  return <div>hi {id} {now}</div>;
}

export default Post;

export async function getStaticProps(ctx: any) {
  return {
    props: {
      id: ctx.params.id,
      now: new Date().toString()
    },
    revalidate: 10
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}
