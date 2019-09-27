import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function NonAuthenticatedRoute ({ component: Component, token, ...rest}) {
  return (
    <Route
      { ...rest }
      render={props => {
        console.log('TOKEN: ' + token);
        return token ? (
          <Redirect to="/home" />
        ) : (
          <Component { ...props } />
        )
      }}
    />
  )
}