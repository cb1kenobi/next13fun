export default function Page({ now }: { now: string }) {
  return (
    <div>ISR {now}</div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      now: new Date().toString()
    },
    revalidate: 10
  };
}