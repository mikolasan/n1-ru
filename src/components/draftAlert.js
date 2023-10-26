import React from 'react'

export default function DraftAlert({ linkPath }) {
  let alertAboutDraftStatus = `Статья находится в активной разработке.
    Она опубликована в таком виде не для издевательства над читателем, 
    а только потому что редактор сказал "можно".`
  return (
    <div className="draftalert">
      <img src="/draft.png" alt="Drawing a whale with a pencil in sketch book"/>
      <p>{alertAboutDraftStatus}</p>
    </div>
  )
}