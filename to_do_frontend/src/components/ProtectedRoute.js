import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute ({ component: Component, token, ...rest }) {
  return (
    <Route
      { ...rest }
      render={props => {
        return token ? (
          <Component { ...props } />
        ) : (
          <Redirect to="/login" />
        )
      }}
    />
  )
}
