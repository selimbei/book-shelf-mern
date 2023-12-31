import AddButton from "./AddButton";

export default function Header() {
  return (
    <header className="sticky top-0 bg-slate-100 flex justify-between items-center p-4 shadow-lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        data-slot="icon"
        className="w-10 h-10 fill-blue-500"
      >
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
      </svg>
      <form method="GET">
        <div className="relative text-slate-800">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-slate-400"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-full pl-10"
            placeholder="Cari judul buku"
            autoComplete="off"
          />
        </div>
      </form>
      {/* <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        type="button"
        className="p-1 border-slate-500 border rounded-full hover:border-blue-500 hover:bg-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          data-slot="icon"
          className="w-6 h-6 stroke-slate-500 hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button> */}
      <AddButton />
    </header>
  );
}
