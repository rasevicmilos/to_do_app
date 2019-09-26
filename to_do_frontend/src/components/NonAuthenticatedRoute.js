import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function NonAuthenticatedRoute ({ component: Component, user, path}) {
  return (
    <Route
    //   { ...rest }
      path={path}
      render={props => {
        return user ? (
          <Redirect to="/" />
        ) : (
        //   <Component { ...props } />
          <Component />
        )
      }}
    />
  )
}