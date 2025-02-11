import Link from 'next/link';

export default function ExercisesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Exercises</h1>
      <p className="mt-2">
        Best tip here is to experiment and not follow strict routines. A lot of
        joy in the journey of discovery. Try to avoid doing dumb exercises that
        risk wrecking your back, joints and so on though. Don't unga bunga it.
      </p>
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
