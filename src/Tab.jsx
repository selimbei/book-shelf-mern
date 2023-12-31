export default function Tab() {
  return (
    <nav className="flex justify-center mt-4">
      <div className="text-sm font-medium text-center text-slate-400">
        <ul className="flex flex-wrap -mb-px">
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg border-slate-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500"
            >
              Belum dibaca
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg border-slate-400 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500"
            >
              Sudah dibaca
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
