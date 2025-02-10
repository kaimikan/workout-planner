import Link from 'next/link';

export default function ExercisesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Exercises</h1>
      <ul className="list-disc list-inside mt-4">
        <li>
          <Link href="/exercises/cardio">Cardio</Link>
        </li>
        <li>
          <Link href="/exercises/strength">Strength</Link>
        </li>
        <li>
          <Link href="/exercises/endurance">Endurance</Link>
        </li>
        <li>
          <Link href="/exercises/explosiveness">Explosiveness</Link>
        </li>
        <li>
          <Link href="/exercises/warmups">Warm-Ups</Link>
        </li>
        <li>
          <Link href="/exercises/cooldowns">Cooldowns</Link>
        </li>
      </ul>
    </div>
  );
}
