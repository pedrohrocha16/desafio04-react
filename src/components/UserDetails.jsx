import React from 'react'

const UserDetails = ({name, age, job}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age} anos</p>
      <p>{job}</p>
      {age >= 18 ? (<p>Essa pessoa é maior de idade e pode tirar carteira!</p>)
      : (<p>Essa pessoa é menor de idade e não pode tirar carteira!</p>)}
    </div>
  )
}

export default UserDetails