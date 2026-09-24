import Link from "next/link";

interface Book {
  icon: string;
  title: string;
  description: string;
}

const books: Book[] = [
  {
    icon: "📘",
    title: "Clean Code",
    description:
      "Learn how to write simple, readable and maintainable software code.",
  },
  {
    icon: "📗",
    title: "The Pragmatic Programmer",
    description:
      "Improve your programming skills with practical software development techniques.",
  },
  {
    icon: "📕",
    title: "Computer Networks",
    description:
      "Understand networking concepts, protocols and modern communication systems.",
  },
];

const ContentSection = () => {
  return (
    <>
              <section
        id="books"
        className="bg-slate-100 px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="font-semibold text-blue-600">
              FEATURED COLLECTION
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Popular Books
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {books.map((book: Book) => (
              <div
                key={book.title}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-blue-100 text-7xl">
                  {book.icon}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {book.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-slate-600">
                    {book.description}
                  </p>

                  <Link
                    href="/reserve"
                    className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
                  >
                    Reserve
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContentSection