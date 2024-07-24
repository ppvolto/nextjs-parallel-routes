import Link from "next/link";

export default async function Navigation() {
  return (
    <ul>
      <li><Link href="/">Home page</Link></li>
      <li><Link href="/settings">Settings</Link></li>
    </ul>
  );
}