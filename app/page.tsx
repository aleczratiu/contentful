import { fetchEntries } from './utils/contentfulPosts';
import Link from 'next/link';

export default async function Home() {
  const result = await fetchEntries();

  console.log('result', result, '\n\n\n');

  return (
    <div>
      Available landing pages:
      <ul>
        {result?.map((page: any, index: number) => (
          <li key={index}>
            <Link href={page.fields.slug || ''}>{page.fields.pageName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
