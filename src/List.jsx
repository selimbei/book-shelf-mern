/* eslint-disable react/prop-types */
export default function List({ children }) {
    return (
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 px-4 divide-y divide-dashed">
        {children}
      </ul>
    )
  }