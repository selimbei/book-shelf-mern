/* eslint-disable react/jsx-no-target-blank */

import { useState, useRef, useEffect } from "react";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2019,
    isComplete: true,
    id: 1,
  },
  {
    title: "You do you",
    author: "Fellexandro Ruby",
    year: 2020,
    isComplete: false,
    id: 2,
  },
];

export default function App() {
  const [items, setItems] = useState(books);
  const [filteredItems, setFilteredItems] = useState(items);
  const [mode, setMode] = useState();

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    setFilteredItems((items) => items.filter((item) => item.id !== id));
  }

  function handleEditItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }

  function handleToggleStatus(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
    setFilteredItems((filteredItems) =>
      filteredItems.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  }

  function handleFilter(by) {
    switch (by) {
      case true:
        setFilteredItems(items.filter((item) => item.isComplete));
        break;
      case false:
        setFilteredItems(items.filter((item) => !item.isComplete));
        break;
      default:
        setFilteredItems(items);
    }
  }

  function handleSetMode(by) {
    switch (by) {
      case true:
        setMode(true);
        break;
      case false:
        setMode(false);
        break;
      default:
        setMode();
    }
  }

  return (
    <>
      <Header onAddItem={handleAddItem} />
      <Tabs onFilter={handleFilter} onSetMode={handleSetMode}/>
      <List
        mode={mode}
        items={filteredItems}
        onDeleteItem={handleDeleteItem}
        onToggleStatus={handleToggleStatus}
        onEdititem={handleEditItem}
      />
    </>
  );
}

function Header({ onAddItem }) {
  const [showModal, setShowModal] = useState(false);

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
      <button
        type="button"
        className="group p-0.5 border-blue-500 border rounded-full hover:border-blue-500 hover:bg-blue-500"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          data-slot="icon"
          className="w-6 h-6 stroke-blue-500 group-hover:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      {showModal && <Modal onAddItem={onAddItem} setShowModal={setShowModal} />}
    </header>
  );
}

function Modal({ onAddItem, setShowModal }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [isComplete, setIsComplete] = useState();

  function handlerSubmit(e) {
    e.preventDefault();

    if (!title && !author && !year) return;

    const newBook = { title, author, year, isComplete, id: Date.now() };
    onAddItem(newBook);

    setShowModal(false);

    setTitle("");
    setAuthor("");
    setYear("");
    setIsComplete();
  }

  return (
    <>
      <div
        className="bg-black/50 flex justify-center items-end overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div
          className="w-full my-6 mx-6 max-w-3xl"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Book
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={handlerSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type book title"
                    required=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Author
                  </label>
                  <input
                    type="num"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type book author"
                    required=""
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Year
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type book year"
                    required=""
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                  />
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    name=""
                    id="isComplete"
                    className="rounded border-gray-500"
                    value={isComplete}
                    onChange={(e) => setIsComplete(e.target.checked)}
                  />
                  <label htmlFor="isComplete">Sudah dibaca</label>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

function Tabs({ onFilter, onSetMode }) {
  // const tabs = ['All', 'Done', 'Undone'];
  const tabs = [
    {"content": 'All',
      "bool": undefined
    },
    {"content": 'Done',
      "bool": true
    },
    {"content": 'Undone',
      "bool": false
    },
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <nav className="flex justify-center mt-4">
      <div className="text-sm font-medium text-center text-slate-400">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.content}
              onClick={() => {
                setActiveTab(index);
                onFilter(tab.bool);
                onSetMode(tab.bool);
              }}
              isActive={index === activeTab}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

  function Tab({label, onClick, isActive}) {
    return (
      <li className="me-2">
        <a
          href="#"
          className={`inline-block p-4 border-b-2 border-transparent ${isActive ? "text-blue-500 border-blue-500" : ""} hover:text-blue-300 hover:border-blue-300`}
          onClick={onClick}
        >
          {label}
        </a>
      </li>
    );
  }

function List({ items, onDeleteItem, onToggleStatus, onEdititem, mode }) {
  
  switch (mode) {
    case true:
      return (
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-4 divide-y">
          {items.filter((item) => item.isComplete).map((item, i) => (
            <ListItem
              key={i}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleStatus={onToggleStatus}
              onEdititem={onEdititem}
            />
          ))}
        </ul>
      );

    case false:
      return (
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-4 divide-y">
          {items.filter((item) => !item.isComplete).map((item, i) => (
            <ListItem
              key={i}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleStatus={onToggleStatus}
              onEdititem={onEdititem}
            />
          ))}
        </ul>
      );

    default:
      return (
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-4 divide-y">
          {items.map((item, i) => (
            <ListItem
              key={i}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleStatus={onToggleStatus}
              onEdititem={onEdititem}
            />
          ))}
        </ul>
      );
  }
}

function ListItem({ item, onDeleteItem, onToggleStatus }) {
  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (showPopup && ref.current && !ref.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showPopup]);

  return (
    <li className="flex bg-white overflow-hidden">
      <div className="grow p-2">
        <h5 className="font-bold">{item.title}</h5>
        <h6 className="italic">{item.author}</h6>
        <p className="inline">{item.year}</p>
        {item.isComplete ? (
          <Sudah item={item} onToggleStatus={onToggleStatus} />
        ) : (
          <Belum item={item} onToggleStatus={onToggleStatus} />
        )}
      </div>
      <div className="p-2">
        <div className="flex justify-end items-center px-4 pt-4" ref={ref}>
          {/* Dropdown menu */}
          {showPopup ? (
            <div className="">
              <div className="relative flex gap-4">
                <button className="text-blue-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
                <button
                  className="text-red-500 text-sm"
                  onClick={() => onDeleteItem(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : null}
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block text-gray-500 rounded-full text-sm p-1.5"
            type="button"
            // onClick={() => onDeleteItem(item.id)}
            onClick={() => setShowPopup(!showPopup)}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              data-slot="icon"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

function Sudah({ item, onToggleStatus }) {
  return (
    <button onClick={() => onToggleStatus(item.id)}>
      <span className="bg-green-200 text-green-700 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full w-min">
        Done
      </span>
    </button>
  );
}

function Belum({ item, onToggleStatus }) {
  return (
    <button onClick={() => onToggleStatus(item.id)}>
      <span className="bg-red-200 text-red-700 text-xs font-medium ml-2 px-2.5 py-0.5 rounded-full w-min">
        Undone
      </span>
    </button>
  );
}
