export default function Home({ now }: { now: string }) {
  return <div>SSG {now}</div>;
}

export async function getStaticProps() {
  return {
    props: {
      now: new Date().toString()
    }
  };
}
