export default function Home(props: { params: { slug: string } }) {
  return (
    <main className="p-24">
      <h1>Settings Page</h1>
      <pre>{JSON.stringify(props)}</pre>
    </main>
  );
}
