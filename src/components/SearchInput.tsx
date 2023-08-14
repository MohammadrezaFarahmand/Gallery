import React from "react"

const SearchInput = (props: { value: string; onChange: any }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default SearchInput
