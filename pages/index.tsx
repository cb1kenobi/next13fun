export default function Home({ now, foo }: { now: string, foo?: string }) {
  return <div>SSG {now} - FOO={foo}</div>;
}

export async function getStaticProps() {
  return {
    props: {
      now: new Date().toString(),
      foo: process.env.FOO
    }
  };
}
