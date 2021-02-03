import React from 'react'

const PATTERNS_URL = 'http://localhost:8080/patterns'


export const Pattern = () => {
  const [patterns, setPatterns] = useState('') //the page the user gets when logged in
  
  const handlePatterns = (accessToken) => {
    
    fetch(PATTERNS_URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then(res => res.json())
      .then(json => {
        setPatterns(json.patterns) //or (setPatterns=true)
      })
      .catch(err => {console.log('error:', err)
    })
  }

  return(
    <section>
    {patterns.map((pattern) => (
      <div key={pattern._id}>
        <h2>{pattern.post}</h2>
      </div>
      
    ))}
      
    </section>
  )
}