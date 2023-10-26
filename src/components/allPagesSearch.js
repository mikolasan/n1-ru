import React from "react"
import Search from "./search"
const searchIndices = [{ name: `n1_ru`, title: `Pages` }]

export default function AllPagesSearch() {
  return <Search indices={searchIndices} />
}
