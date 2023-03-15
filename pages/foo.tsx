export default function Page({ now }: { now: string }) {
  return <div>SSR {now}</div>;
}

export async function getServerSideProps() {
  return {
    props: {
      now: new Date().toString()
    }
  };
}