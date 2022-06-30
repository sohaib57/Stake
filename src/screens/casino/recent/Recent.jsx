import React from 'react'
import RecentComp from '../../../components/casino/recent/Recent'
import useDocumentTitle from '../../../utils/useDocumentTitle'
const Recent = () => {
  useDocumentTitle('Recently Played Casino Games - Stake.com')
  return (
    <RecentComp />
  )
}

export default Recent