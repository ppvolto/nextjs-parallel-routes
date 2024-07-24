import Link from "next/link";

export default async function Navigation() {
  return (
    <ul>
      <li><Link href="/">Home page</Link></li>
      <li><Link href="/settings">Settings (Active)</Link></li>
      <li><Link href="/settings/item1">Settings Item1</Link></li>
      <li><Link href="/settings/item2">Settings Item2</Link></li>
    </ul>
  );
}