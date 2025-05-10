export default function ErrorPage({ searchParams }: { searchParams: { error?: string } }) {
    const msg = searchParams.error === 'AccessDenied'
      ? 'Désolé, vous n’êtes pas autorisé·e avec ce compte Google.'
      : 'Une erreur est survenue.'
    return (
      <main className="flex items-center justify-center min-h-screen">
        <p className="text-red-600">{msg}</p>
      </main>
    )
  }
  