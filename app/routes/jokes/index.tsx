import type { LoaderFunction } from 'remix';
import { json } from 'remix';
import { useLoaderData, Link } from '@remix-run/react';
import type { Joke } from '@prisma/client';

import { db } from '~/utils/db.server';

type LoaderData = { randomJoke: Joke };

export const loader = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber,
  });
  const data: LoaderData = { randomJoke };
  return json(data);
};

export default function JokesIndexRoute() {
  const data = useLoaderData<LoaderData>();

  return (
    <>
      <span>Here's a random joke:</span>
      <div>
        <p>{data.randomJoke.content}</p>
        <Link to={data.randomJoke.id}>"{data.randomJoke.name}" Permalink</Link>
      </div>
    </>
  );
}
