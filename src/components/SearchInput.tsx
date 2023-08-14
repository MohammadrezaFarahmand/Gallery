import React from "react"

const SearchInput = (props: { value: string; onChange: any }) => {
  return (
    <div>
      <input
        className="w-2/5 p-2 focus:outline-none"
        style={{ borderBottom: "2px solid black" }}
        type="text"
        placeholder="search..."
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default SearchInput
