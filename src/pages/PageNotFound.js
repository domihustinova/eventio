import React from 'react'

import { NOT_FOUND_TEXTS } from '../utils/consts'
import { ErrorPage } from '../components/ErrorPage/ErrorPage'
import { LayoutContainer } from '../containers/Layout'

export function PageNotFound() {
  return (
    <LayoutContainer>
      <ErrorPage>
        <ErrorPage.Title>{NOT_FOUND_TEXTS.TITLE}</ErrorPage.Title>
        <ErrorPage.Subtitle>{NOT_FOUND_TEXTS.SUBTITLE}</ErrorPage.Subtitle>
        <ErrorPage.Button>{NOT_FOUND_TEXTS.ACTION}</ErrorPage.Button>
      </ErrorPage>
    </LayoutContainer>
  )
}
