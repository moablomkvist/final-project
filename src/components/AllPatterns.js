import React, { useState } from 'react'

//const READ_ONLY_URL = 'https://api.ravelry.com/pattern_categories/list.json'
const READ_ONLY_URL = 'https://api.ravelry.com/read-43a3981546776de4df6fbb23599aa0a2/pattern_categories/list.json'

export const AllPatterns = () => {
  const [patterns, setPatterns] = useState([])

  fetch(READ_ONLY_URL)
    .then(res => res.json())
    .then(json => setPatterns(json.pattern_categories))

return (
  <p>Hej</p>
)
}